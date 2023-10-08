import React, { useContext, useEffect, useRef } from 'react';
// Objects
import { Tile } from './Tile';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// Data
import { maxGridYAxisLength } from '../../../utils/gameData/Constants';

function GameCanvas() {
  const { quickOpenBuildingsMenu } = useContext(ToggleContext);
  const { player, setPlayer, mouseBuildingRef } = useContext(PlayerContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);

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

    createTileGrid(originX, originY);
    drawCanvasElements();
  }, []);

  // Create tiles
  const createTileGrid = (originX, originY) => {
    let id = 1;
    let tilesArray = [];

    for (let Xi = maxGridXLength - 1; Xi >= 0; Xi--) {
      for (let Yi = 0; Yi < maxGridYLength; Yi++) {
        const offX =
          (Xi * tileColumnOffset) / 2 + (Yi * tileColumnOffset) / 2 + originX;
        const offY =
          (Yi * tileRowOffset) / 2 - (Xi * tileRowOffset) / 2 + originY;

        const tile = new Tile(id, offX, offY, 'red', 'green');
        tilesArray.push(tile);

        id++;
      }
    }

    tilesRef.current = tilesArray;
  };

  // Main draw loop
  const drawCanvasElements = () => {
    console.log('AAAAAAAAAAA');
    drawTileGrid();
    drawBuildingElements();

    requestAnimationFrame(drawCanvasElements);
  };

  const drawBuildingElements = () => {
    const context = contextRef.current;
    const buildings = buildingsRef.current;

    buildings.forEach((building) => {
      building.drawBuilding(context);

      if (building.payoutCollectionTime <= new Date()) {
        console.log('PPPPPPPPPPPPPPP');
      }
    });
  };

  const drawTileGrid = () => {
    const context = contextRef.current;

    tilesRef.current.forEach((tile) => {
      tile.drawTile(context);
    });
  };

  const hoverMouseFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    const context = contextRef.current;
    clearCanvas();
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

          console.log('mouseBuildingAvailable', mouseBuildingAvailable);
          if (mouseBuildingAvailable.currencyType === 'gems') {
            let fundsAvailable = player.currencyData;

            console.log('fundsAvailable', fundsAvailable);

            let gems = fundsAvailable.gems
            console.log('gems', gems);
            let cost = mouseBuildingAvailable.cost
            console.log('cost', cost);
            let newAmount = gems - cost
            console.log('newAmount', newAmount);

            fundsAvailable.gems = newAmount;

            setPlayer({
              ...player,
              currencyData: fundsAvailable
            })
          }

          if (mouseBuildingAvailable.currencyType === 'gold') {
            let fundsAvailable = player.currencyData;

            console.log('fundsAvailable', fundsAvailable);

            let gold = fundsAvailable.gold
            console.log('gold', gold);
            let cost = mouseBuildingAvailable.cost
            console.log('cost', cost);
            let newAmount = gold - cost
            console.log('newAmount', newAmount);

            fundsAvailable.gold = newAmount;

            setPlayer({
              ...player,
              currencyData: fundsAvailable
            })
          }
          // Break out of the loop to prevent further tiles from being clicked
          break;
        }
      }

      // add to user array
      let buildingsArray = buildingsRef.current;
      buildingsArray.push(mouseBuildingAvailable);

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
      drawTileGrid();

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

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={hoverMouseFunctions}
      onMouseDown={clickOnTile}
    />
  );
}

export default GameCanvas;
