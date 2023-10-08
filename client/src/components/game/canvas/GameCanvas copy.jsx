import React, { useEffect, useRef, useState } from 'react';
// Objects
import { Tile } from './Tile';

function GameCanvas() {
  const canvasRef = useRef(null);
  const [selectedTile, setSelectedTile] = useState({ x: -1, y: -1 });

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

    const drawTile = (offX, offY) => {
      // Draw tile interior
      console.log('YYYYYYYYYYYYYYYYYYYYYYYY');
      context.beginPath();
      context.fillStyle = 'yellow';
      context.moveTo(offX, offY + tileRowOffset / 2);
      context.lineTo(offX + tileColumnOffset / 2, offY);
      context.lineTo(offX + tileColumnOffset, offY + tileRowOffset / 2);
      context.lineTo(offX + tileColumnOffset / 2, offY + tileRowOffset);
      context.closePath();
      context.stroke();
      context.fill();
    };

    const redrawTiles = () => {
      for (let Xi = Xtiles - 1; Xi >= 0; Xi--) {
        for (let Yi = 0; Yi < Ytiles; Yi++) {
          const offX =
            (Xi * tileColumnOffset) / 2 + (Yi * tileColumnOffset) / 2 + originX;
          const offY =
            (Yi * tileRowOffset) / 2 - (Xi * tileRowOffset) / 2 + originY;
          drawTile(offX, offY);
        }
      }
    };

    redrawTiles();
  }, [selectedTile]);

  return <canvas ref={canvasRef} id='isocanvas' />;
}

export default GameCanvas;
