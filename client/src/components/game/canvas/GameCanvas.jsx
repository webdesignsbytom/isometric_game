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
  const Xtiles = 10;
  const Ytiles = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const originX = width / 2 - (Xtiles * tileColumnOffset) / 2;
    const originY = height / 2;

    console.log('ORIGINX', originX, originY);

    context.scale(1, 1);
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;

    contextRef.current = context;

    // Draw grid and initialize squares
    // createCanvasGrid();
    // updateAndRefreshCanvas();
    createTileGrid(originX, originY);
    drawTileGrid()
  }, []);

  const createTileGrid = (originX, originY) => {
    let id = 1;
    let tilesArray = []

    for (let Xi = Xtiles - 1; Xi >= 0; Xi--) {
      for (let Yi = 0; Yi < Ytiles; Yi++) {
        const offX =
          (Xi * tileColumnOffset) / 2 + (Yi * tileColumnOffset) / 2 + originX;
        const offY =
          (Yi * tileRowOffset) / 2 - (Xi * tileRowOffset) / 2 + originY;

        
        const tile = new Tile(id, 1, offX, 1, offY, 1, 'red', 'green');
        tilesArray.push(tile);

        id++;
      }
    }

    tilesRef.current = tilesArray;
  };

  const drawTileGrid = () => {
    console.log('AAAAAAAAAAAAAAAA');
    const context = contextRef.current;

    tilesRef.current.forEach((tile) => {
      tile.drawTile(context); // Pass whether the tile is hovered
    });
  }

  return <canvas ref={canvasRef} />;
}

export default GameCanvas;
