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
  const { player, mouseItemRef, mouseBuildingRef } =
    useContext(PlayerContext);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);

  const buildingsRef = useRef(player.buildingsData.buildingsArray);

  console.log('1. buildingsRef', buildingsRef);
  const maxGridXLength = maxGridYAxisLength;
  const maxGridYLength = maxGridYAxisLength;

  const tileColumnOffset = 64; // pixels
  const tileRowOffset = 32; // pixels

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

  console.log('1. mouseBuildingRef', mouseBuildingRef);

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

  const drawCanvasElements = () => {
    drawTileGrid();
    drawBuildingElements();
  };

  const drawBuildingElements = () => {
    const context = contextRef.current;
    const buildings = buildingsRef.current;

    buildings.forEach((building) => {
      building.drawBuilding(context);
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
    clearCanvas()
    const mouseBuildingAvailable = mouseBuildingRef.current;
    const tiles = tilesRef.current;

    if (mouseBuildingAvailable) {
      mouseBuildingAvailable.update(context, offsetX, offsetY)
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
    // Redraw the canvas to update the colors
    drawCanvasElements();
  };

  const drawImageUnderMouse = (offsetX, offsetY) => {
    const context = contextRef.current;
    const mouseItem = mouseItemRef.current;

    clearCanvas();

    // Create a new Image object to load the PNG
    const image = new Image();
    image.src = mouseItem.imageUrl;

    // Handle drawing the image when it's loaded
    image.onload = () => {
      // Calculate the position to draw the image centered under the mouse cursor
      const drawX = offsetX - image.width / 2;
      const drawY = offsetY - image.height / 2;

      // Draw the image on the canvas at the calculated position
      context.drawImage(image, drawX, drawY);

      // Redraw the canvas to update the colors
      drawCanvasElements();
    };
  };

  const clickOnTile = ({ nativeEvent }) => {
    if (isProcessingClick) {
      return; // Ignore additional click events while processing one
    }
    const tiles = tilesRef.current;

    tiles.forEach((tile) => {
      tile.isActive = false;
    });

    quickOpenBuildingsMenu();

    isProcessingClick = true;

    const { offsetX, offsetY } = nativeEvent;

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
