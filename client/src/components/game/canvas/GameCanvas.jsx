import React, { useEffect, useRef } from 'react';
// Objects
import { Tile } from './Tile';

function GameCanvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);

  const maxGridXLength = 10;
  const maxGridYLength = 10;

  const tileColumnOffset = 64; // pixels
  const tileRowOffset = 32; // pixels

  let isProcessingClick = false;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas height
    const width = window.innerWidth;
    const height = window.innerHeight;
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
    drawTileGrid();
  }, []);

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

  const drawTileGrid = () => {
    const context = contextRef.current;

    tilesRef.current.forEach((tile) => {
      tile.drawTile(context); // Pass whether the tile is hovered
    });
  };

  const hoverOverTile = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    const tiles = tilesRef.current;

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
    drawTileGrid();
  };

  const clickOnTile = ({ nativeEvent }) => {
    if (isProcessingClick) {
      return; // Ignore additional click events while processing one
    }
    const tiles = tilesRef.current;

    tiles.forEach((tile) => {
      tile.isActive = false;
    });

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

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={hoverOverTile}
      onMouseDown={clickOnTile}
    />
  );
}

export default GameCanvas;
