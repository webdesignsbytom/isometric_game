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

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const originX = width / 2 - (Xtiles * tileColumnOffset) / 2;
      const originY = height / 2;
      return { originX, originY };
    };

    const { originX, originY } = updateCanvasSize();

    window.addEventListener('resize', () => {
      const { originX, originY } = updateCanvasSize();
      redrawTiles(context, originX, originY);
    });

    // window.addEventListener('mousemove', (e) => {
    //   e.pageX -= tileColumnOffset / 2 - originX;
    //   e.pageY -= tileRowOffset / 2 - originY;
    //   const tileX = Math.round(
    //     e.pageX / tileColumnOffset - e.pageY / tileRowOffset
    //   );
    //   const tileY = Math.round(
    //     e.pageX / tileColumnOffset + e.pageY / tileRowOffset
    //   );

    //   setSelectedTile({ x: tileX, y: tileY });
    //   redrawTiles(context, originX, originY);
    // });

    window.addEventListener('click', () => {
      setSelectedTile({ x: -1, y: -1 });
      redrawTiles(context, originX, originY);
    });

    const drawLine = (x1, y1, x2, y2, color) => {
      context.strokeStyle = color;
      context.beginPath();
      context.lineWidth = 1;
      context.moveTo(x1, y1);
      context.lineTo(x2, y2);
      context.stroke();
    };

    const drawTile = (Xi, Yi, offX, offY) => {
      // Draw tile interior
      context.beginPath();
      if (Xi === selectedTile.x && Yi === selectedTile.y) {
        context.fillStyle = 'yellow';
      } else {
        context.fillStyle = 'green';
      }
      context.moveTo(offX, offY + tileRowOffset / 2);
      context.lineTo(offX + tileColumnOffset / 2, offY);
      context.lineTo(offX + tileColumnOffset, offY + tileRowOffset / 2);
      context.lineTo(offX + tileColumnOffset / 2, offY + tileRowOffset);
      context.closePath();
      context.stroke();
      context.fill();

      // Draw tile outline
      const color = '#999';
      drawLine(
        offX,
        offY + tileRowOffset / 2,
        offX + tileColumnOffset / 2,
        offY,
        color
      );
      drawLine(
        offX + tileColumnOffset / 2,
        offY,
        offX + tileColumnOffset,
        offY + tileRowOffset / 2,
        color
      );
      drawLine(
        offX + tileColumnOffset,
        offY + tileRowOffset / 2,
        offX + tileColumnOffset / 2,
        offY + tileRowOffset,
        color
      );
      drawLine(
        offX + tileColumnOffset / 2,
        offY + tileRowOffset,
        offX,
        offY + tileRowOffset / 2,
        color
      );

      if (showCoordinates) {
        context.fillStyle = 'orange';
        context.fillText(
          Xi + ', ' + Yi,
          offX + tileColumnOffset / 2 - 9,
          offY + tileRowOffset / 2 + 3
        );
      }
    };

    const redrawTiles = (context, originX, originY) => {
      for (let Xi = Xtiles - 1; Xi >= 0; Xi--) {
        for (let Yi = 0; Yi < Ytiles; Yi++) {
          const offX =
            (Xi * tileColumnOffset) / 2 + (Yi * tileColumnOffset) / 2 + originX;
          const offY =
            (Yi * tileRowOffset) / 2 - (Xi * tileRowOffset) / 2 + originY;
          drawTile(Xi, Yi, offX, offY);
        }
      }
    };

    const showCoordinates = true;

    redrawTiles(context, originX, originY);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [selectedTile]);

  return <canvas ref={canvasRef} id='isocanvas' />;
}

export default GameCanvas;
