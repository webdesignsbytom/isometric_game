import React, { useContext, useEffect, useRef } from 'react';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// Data
import { maxGridYAxisLength } from '../../../utils/gameData/Constants';
// Functions
import {
  clearCanvas,
  completeBuildingPurchaseGems,
  completeBuildingPurchaseGold,
  createTileGrid,
  drawBuildingElements,
  drawTileGrid,
} from '../functions/Functions';
// Images
import Gold from '../../../assets/images/game/currency/goldCoin.png';

function GameCanvas() {
  const { quickOpenBuildingsMenu } = useContext(ToggleContext);
  const { player, setPlayer, mouseBuildingRef } = useContext(PlayerContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);
  const goldCoinRef = useRef(null);

  const buildingsRef = useRef(player.buildingsData.buildingsArray);

  const maxGridXLength = maxGridYAxisLength;
  const maxGridYLength = maxGridYAxisLength;

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

    const goldCoin = new Image();
    goldCoin.src = Gold;

    goldCoinRef.current = goldCoin;
    // Create tiles
    createTileGrid(
      originX,
      originY,
      maxGridXLength,
      maxGridYLength,
      tileColumnOffset,
      tileRowOffset,
      tilesRef
    );

    drawCanvasElements();
  }, []);

  // Main draw loop
  const drawCanvasElements = () => {
    drawTileGrid(contextRef, tilesRef);
    drawBuildingElements(contextRef, buildingsRef, goldCoinRef);

    // Cause moue building to be under grid
    // requestAnimationFrame(drawCanvasElements);
  };

  const hoverMouseFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;
    clearCanvas(canvasRef);
    drawCanvasElements();

    const mouseBuildingAvailable = mouseBuildingRef.current;
    const tiles = tilesRef.current;

    // Draw building under mouse
    if (mouseBuildingAvailable) {
      mouseBuildingAvailable.update(context, offsetX, offsetY);
    }

    // Initially, assume no tiles are hovered
    tiles.forEach((tile) => {
      tile.isHovered = false;
    });

    // Find the tile that the mouse is over and set it as hovered
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

  const clickOnTile = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    if (isProcessingClick) {
      return; // Ignore additional click events while processing one
    }

    const tiles = tilesRef.current;

    tiles.forEach((tile) => {
      tile.isActive = false;
    });

    const context = contextRef.current;
    const mouseBuildingAvailable = mouseBuildingRef.current;

    // Draw building under mouse
    if (mouseBuildingAvailable) {
      // update pos
      for (const tile of tiles) {
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
          // Mouse is clicking on this tile
          console.log('Tile clicked');
          //tile.isActive = true;
          mouseBuildingAvailable.setPosition(context, tile.offX, tile.offY);

          console.log('XXX mouseBuildingAvailable', mouseBuildingAvailable);
          if (mouseBuildingAvailable.currencyType === 'gems') {
            completeBuildingPurchaseGems(
              player,
              mouseBuildingAvailable,
              setPlayer,
              buildingsRef
            );
          }

          if (mouseBuildingAvailable.currencyType === 'gold') {
            completeBuildingPurchaseGold(
              player,
              mouseBuildingAvailable,
              setPlayer,
              buildingsRef
            );
          }
          // Break out of the loop to prevent further tiles from being clicked
          break;
        }
      }

      // add to user array
      // let buildingsArray = buildingsRef.current;
      // buildingsArray.push(mouseBuildingAvailable);

      // delete from ref
      mouseBuildingRef.current = null;
    } else {
      quickOpenBuildingsMenu();

      isProcessingClick = true;

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
          // Mouse is clicking on this tile
          console.log('Tile clicked');
          tile.isActive = true;

          // Break out of the loop to prevent further tiles from being clicked
          break;
        }
      }

      // Redraw the canvas to update the colors
      // drawTileGrid();
      clearCanvas()
      drawCanvasElements();
      // Allow processing of the next click event
      isProcessingClick = false;
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Clear the entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  console.log('buildingref', buildingsRef);
  return (
    <canvas
      ref={canvasRef}
      onMouseMove={hoverMouseFunctions}
      onMouseDown={clickOnTile}
    />
  );
}

export default GameCanvas;
