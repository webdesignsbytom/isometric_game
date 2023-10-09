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

  // Canvas and animations
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const tilesRef = useRef([]);
  const buildingsRef = useRef(player.buildingsData.buildingsArray);
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
    createTileGrid(
      originX,
      originY,
      maxGridXLength,
      maxGridYLength,
      tileColumnOffset,
      tileRowOffset,
      tilesRef
    );

    // Draw game on canvas
    drawCanvasElements();
  }, []);

  // Main draw loop
  const drawCanvasElements = () => {
    // Draw tiles first
    drawTileGrid(contextRef, tilesRef);
    // Draw buildings on top
    drawBuildingElements(contextRef, buildingsRef, goldCoinRef);

    // Cause moue building to be under grid
    // requestAnimationFrame(drawCanvasElements);
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
      mouseBuildingAvailable.update(context, offsetX, offsetY);
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

  const clickOnTileFunctions = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;

    // Ignore additional click events while processing one
    if (isProcessingClick) {
      return;
    }

    const tiles = tilesRef.current;

    // Set active tile
    tiles.forEach((tile) => {
      tile.isActive = false;
    });

    // Contexts
    const context = contextRef.current;
    const mouseBuildingAvailable = mouseBuildingRef.current;

    // If placing building
    if (mouseBuildingAvailable) {
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
          // Set building to tile position
          mouseBuildingAvailable.setPosition(context, tile.offX, tile.offY);

          // Buy with gems
          if (mouseBuildingAvailable.currencyType === 'gems') {
            completeBuildingPurchaseGems(
              player,
              mouseBuildingAvailable,
              setPlayer,
              buildingsRef
            );
          }
          // Buy with gold
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

      // delete building from ref
      mouseBuildingRef.current = null;
    } else {
      // Open building menu
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
      onMouseDown={clickOnTileFunctions}
    />
  );
}

export default GameCanvas;
