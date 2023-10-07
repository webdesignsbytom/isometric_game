import React, { useEffect, useRef, useState } from 'react';
// Objects
import { Tile } from './Tile';

function GamesCanvas() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);

  const [hoveredTileId, setHoveredTileId] = useState(null);

  const maxGridXLength = 10;
  const maxGridYLength = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    var rect = canvas.parentNode.getBoundingClientRect();

    // Set the canvas dimensions without scaling
    canvas.width = rect.width;
    canvas.height = rect.height - 8; // thickness of border

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;

    contextRef.current = context;

    // Draw grid and initialize squares
    createCanvasGrid();
    updateAndRefreshCanvas();
  }, []);

  const createCanvasGrid = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    let tiles = [];

    // Set size
    const cellSize = 50;
    // Id number
    let id = 1;

    for (let x = 0; x < maxGridXLength; x++) {
      for (let y = 0; y < maxGridYLength; y++) {
        const square = new Tile(
          id,
          x * cellSize,
          y * cellSize,
          cellSize,
          'green',
          'red'
        );
        id++;
        tiles.push(square);
      }
    }
    // Add to ref array of square
    tilesRef.current = tiles;
  };

  const updateAndRefreshCanvas = () => {
    const canvas = canvasRef.current;
    const context = contextRef.current;

    requestAnimationFrame(updateAndRefreshCanvas);
    context.clearRect(0, 0, canvas.width, canvas.height);

    tilesRef.current.forEach((tile) => {
      tile.draw(context); // Pass whether the tile is hovered
    });
  };

  const hoverOverTile = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    tilesRef.current.forEach((tile) => {
      const distanceToTile = Math.sqrt(
        Math.pow(offsetX - (tile.xpos + tile.size / 2), 2) +
          Math.pow(offsetY - (tile.ypos + tile.size / 2), 2)
      );

      if (distanceToTile < tile.size / 2) {
        // Mouse is hovering over this tile
        tile.isHovered = true;
        return;
      } else {
        tile.isHovered = false;
      }
    });
  };

  const clickOnTile = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    for (const tile of tilesRef.current) {
      tile.isActive = false;
      const distanceToTile = Math.sqrt(
        Math.pow(offsetX - (tile.xpos + tile.size / 2), 2) +
          Math.pow(offsetY - (tile.ypos + tile.size / 2), 2)
      );

      if (distanceToTile < tile.size / 2) {
        // Mouse is hovering over this tile
        console.log('tile.isHovered = true;');
        tile.isActive = !tile.isActive;
      }
    }
    return;
  };

  return (
    <main className='grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <canvas
        ref={canvasRef}
        onMouseMove={hoverOverTile}
        onMouseDown={clickOnTile}
      />
    </main>
  );
}

export default GamesCanvas;
