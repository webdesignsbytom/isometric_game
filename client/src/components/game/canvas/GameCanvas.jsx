import React, { useContext, useEffect, useRef } from 'react';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// Data
import { BuildingsMenuArray } from '../../../utils/gameData/BuildingsData';
import {
  maxGridYAxisLength,
  ownedTileColourHex,
} from '../../../utils/gameData/Constants';
// Functions
import {
  clearCanvas,
  collectFromBuildingAndUpdateFunds,
  createNewGameTileGrid,
  drawBuildingElements,
  drawTileGrid,
  purchaseAndPlaceNewBuilding,
} from '../functions/Functions';
// Images
import Gold from '../../../assets/images/game/currency/goldCoin.png';
import { Building } from './Building';

function GameCanvas() {

  const { quickOpenBuildingsMenu, openBuyTileModal } = useContext(ToggleContext);
  const { player, setPlayer, mouseBuildingRef, buildingIDNumberRef } =
    useContext(PlayerContext);

    // Canvas and animations
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);
  const buildingsRef = useRef([]);
  const goldCoinRef = useRef(null);

  // Grid sizes
  const maxGridXLength = maxGridYAxisLength;
  const maxGridYLength = maxGridYAxisLength;

  // Isometric offset
  const tileColumnOffset = 64; // pixels
  const tileRowOffset = 32; // pixels

  // Don't allow clicking on two tiles
  let isProcessingClick = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas height
    const width = window.innerWidth;
    const height = window.innerHeight - 32;
    canvas.width = width;
    canvas.height = height;

    // Set tiles to build from center
    const originX = width / 2 - (maxGridXLength * tileColumnOffset) / 2;
    const originY = height / 2;

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 2;

    contextRef.current = context;

    // Create images needed for game
    const goldCoin = new Image();
    goldCoin.src = Gold;
    goldCoinRef.current = goldCoin;

    // Create tiles
    createNewGameTileGrid(
      originX,
      originY,
      maxGridXLength,
      maxGridYLength,
      tileColumnOffset,
      tileRowOffset,
      tilesRef,
      player,
      setPlayer
    );

    if (player.playerID) {
      drawTilesOwnedByPlayer();
      drawBuildingsOwnedByPlayer();
    }

    // Draw game on canvas
    drawCanvasElements();
  }, []);

  const drawBuildingsOwnedByPlayer = () => {
    let buildingOwnedArray = player.buildingsData.buildingsArray;

    let newArray = [];

    buildingOwnedArray.forEach((building) => {
      let buildingFound = BuildingsMenuArray.find(
        (e) => e.id === building.buildingIdNum
      );

      if (buildingFound) {
        let tiles = tilesRef.current;

        let tileMatch = tiles.find(
          (tile) => tile.id === building.locationTileId
        );

        const newImg = new Image();
        newImg.src = "/static/media/small_hospital.12e9fbeb6d44f01a268b.png";

        const newCreatedBuilding = new Building(
          building.buildingIdNum, // ID
          buildingFound.name, // building name lowercase
          buildingFound.title, // building name For Show
          newImg, // Image
          buildingFound.description, //description
          buildingFound.gridSize, // gridSize
          buildingFound.xpForPurchasing, // xp for
          buildingFound.cost, // Cost
          buildingFound.currencyType, // Gems/Gold
          buildingFound.incomeSeconds, // Time to produce
          buildingFound.incomeAmount, // Amount to produce
          buildingFound.incomeCurrency, // Gems/Gold to produce
          buildingFound.incomePeriod, // Text version of time
          buildingFound.constructionTime, // seconds to build
          buildingFound.constructionTimePeriod, // Text seconds to build
          buildingFound.constructionImage, // Construction image
          tileMatch.offX, // X pos
          tileMatch.offY, // Y pos
          buildingFound.imageHeight // Image height
        );
        newArray.push(newCreatedBuilding);
        // buildingFound.setPosition(tileMatch.offX, tileMatch.offY)
      }
    });

    buildingsRef.current = newArray;
  };

  const drawTilesOwnedByPlayer = () => {
    let tileOwnedArray = player.tileData.tilesArray;

    let newTileRef = tilesRef.current;

    tileOwnedArray.forEach((tile) => {
      // Find tiles that match owned tile id
      let foundTile = newTileRef.find((e) => e.id === tile.tileIdNum);
      if (foundTile) {
        foundTile.isOwned = true;
        foundTile.fillColour = ownedTileColourHex;
      }
    });
  };

  // Main draw loop
  const drawCanvasElements = () => {
    // Draw tiles first
    drawTileGrid(contextRef, tilesRef);
    // Draw buildings on top
    drawBuildingElements(contextRef, buildingsRef, goldCoinRef);
  };

  const hoverMouseFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;

    clearCanvas(canvasRef);
    drawCanvasElements();

    // Check for building to place
    const mouseBuildingAvailable = mouseBuildingRef.current;
    // Tiles
    const tiles = tilesRef.current;

    // Draw building under mouse position
    if (mouseBuildingAvailable) {
      mouseBuildingAvailable.update(context, offsetX, offsetY - 10);
    }

    // Initially, assume no tiles are hovered over
    tiles.forEach((tile) => {
      tile.isHovered = false;
    });

    // Check for hovered tiles
    const hoveredTile = tiles.find((tile) => {
      // Convert mouse coordinates to isometric coordinates
      const isoX = (offsetX - tile.offX) / tile.tileColumnOffset;
      const isoY = (offsetY - tile.offY) / tile.tileRowOffset;

      // Check if the mouse is within the bounds of the tile
      return (
        isoX >= 0 && isoY >= 0 && isoX <= 1 && isoY <= 1 && isoX + isoY <= 1
      );
    });

    if (hoveredTile) {
      hoveredTile.isHovered = true;
    }
  };

  const mouseClickFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    // Ignore additional click events while processing one
    if (isProcessingClick) {
      return;
    }

    // Contexts
    const context = contextRef.current;
    const mouseBuildingAvailable = mouseBuildingRef.current;
    const tiles = tilesRef.current;

    // Set active tile
    tiles.forEach((tile) => {
      tile.isActive = false;
    });

    // If building is ready to collect

    // If placing building
    if (mouseBuildingAvailable) {
      purchaseAndPlaceNewBuilding(
        tiles,
        offsetX,
        offsetY,
        mouseBuildingAvailable,
        context,
        player,
        setPlayer,
        buildingsRef,
        buildingIDNumberRef,
        mouseBuildingRef
      );
    } else {
      for (const building of buildingsRef.current) {
        collectFromBuildingAndUpdateFunds(
          offsetX,
          offsetY,
          building,
          context,
          goldCoinRef,
          canvasRef,
          drawCanvasElements,
          player,
          setPlayer
        );
      }

      quickOpenBuildingsMenu();

      isProcessingClick = true;

      // Set tile as selected
      for (const tile of tilesRef.current) {
        // Convert mouse coordinates to isometric coordinates
        const isoX = (offsetX - tile.offX) / tile.tileColumnOffset;
        const isoY = (offsetY - tile.offY) / tile.tileRowOffset;
        // Check if the mouse is within the bounds of the tile
        if (
          isoX >= 0 &&
          isoY >= 0 &&
          isoX <= 1 &&
          isoY <= 1 &&
          isoX + isoY <= 1
        ) {
          tile.isActive = true;

          if (!tile.isOwned) {
            console.log('1 tile', tile);
            openBuyTileModal(tile);
          }
          // Break out of the loop to prevent further tiles from being clicked
          break;
        }
      }
      // Redraw the canvas
      clearCanvas(canvasRef);
      drawCanvasElements();

      // Allow processing of the next click event
      isProcessingClick = false;
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={hoverMouseFunctions}
      onMouseDown={mouseClickFunctions}
      className='cursor-pointer'
    />
  );
}

export default GameCanvas;
