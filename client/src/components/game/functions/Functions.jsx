// Data
import client from '../../../api/client';
import {
  ownedTileColourHex,
  unownedTileColourHex,
} from '../../../utils/gameData/Constants';
// Components
import { Tile } from '../canvas/Tile';

export const createNewGameTileGrid = (
  originX,
  originY,
  maxGridXLength,
  maxGridYLength,
  tileColumnOffset,
  tileRowOffset,
  tilesRef,
  player,
  setPlayer
) => {
  // Create preowned tiles array
  const numRows = 20;
  const numCols = 15;
  const centerSize = 5;

  const TileGrid = [];

  for (let row = 1; row <= numRows; row++) {
    for (let col = 1; col <= numCols; col++) {
      const isCenter =
        row >= (numRows - centerSize) / 2 &&
        row <= (numRows + centerSize) / 2 &&
        col >= (numCols - centerSize) / 2 &&
        col <= (numCols + centerSize) / 2;

      TileGrid.push([row, col, isCenter]);
    }
  }

  let id = 1;
  let tilesArray = [];

  for (let Xi = maxGridXLength - 1; Xi >= 0; Xi--) {
    for (let Yi = 0; Yi < maxGridYLength; Yi++) {
      const offX =
        (Xi * tileColumnOffset) / 2 + (Yi * tileColumnOffset) / 2 + originX;
      const offY =
        (Yi * tileRowOffset) / 2 - (Xi * tileRowOffset) / 2 + originY;

      let gridNum = id - 1;
      // True or false
      const preownedTile = TileGrid[gridNum][2];

      if (preownedTile) {
        const tile = new Tile(
          id,
          offX,
          offY,
          ownedTileColourHex,
          'black',
          preownedTile
        );
        tilesArray.push(tile);
      } else {
        const tile = new Tile(
          id,
          offX,
          offY,
          unownedTileColourHex,
          'black',
          preownedTile
        );
        tilesArray.push(tile);
      }
      id++;
    }
  }

  // Update player state with preowned tiles
  // let tileData = player.tileData;

  // let ownedTiles = [];

  // tilesArray.forEach((tile) => {
  //   if (tile.isOwned) {
  //     ownedTiles.push(tile);
  //   }
  // });

  // // Update player
  // tileData.tilesArray = ownedTiles;
  // let numTilesOwned = ownedTiles.length;
  // tileData.tilesOwned = numTilesOwned;

  tilesRef.current = tilesArray;
};

export const drawBuildingElements = (contextRef, buildingsRef, goldCoinRef) => {
  const context = contextRef.current;
  const buildings = buildingsRef.current;

  buildings.forEach((building) => {
    if (building.payoutCollectionTime <= new Date()) {
      building.payoutReady = true;
    }
    building.drawBuilding(context, goldCoinRef);
  });
};

export const drawTileGrid = (contextRef, tilesRef) => {
  const context = contextRef.current;

  tilesRef.current.forEach((tile) => {
    tile.drawTile(context);
  });
};

export const clearCanvas = (canvasRef) => {
  const canvas = canvasRef.current;
  const context = canvas.getContext('2d');
  // Clear the entire canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
};

export const completeBuildingPurchaseGems = (
  player,
  mouseBuildingAvailable,
  setPlayer,
  buildingsRef,
  buildingIDNumberRef
) => {
  // Increase building owned id
  let idNum = buildingIDNumberRef.current;
  idNum++;

  buildingIDNumberRef.current = idNum;
  // Pay for building
  let fundsAvailable = player.currencyData;
  // Funds
  let gems = fundsAvailable.gems;
  let cost = mouseBuildingAvailable.cost;
  let newAmount = gems - cost;
  fundsAvailable.gems = newAmount;
  // Buildings
  let array = buildingsRef.current;
  array.push(mouseBuildingAvailable);
  buildingsRef.current = array;

  // Update xp
  let currentXp = player.currentXp;
  let buildingXp = mouseBuildingAvailable.xpForPurchasing;
  let newTotalXp = currentXp + buildingXp;

  setPlayer({
    ...player,
    currencyData: fundsAvailable,
    currentXp: newTotalXp,
  });
};

export const completeBuildingPurchaseGold = (
  player,
  mouseBuildingAvailable,
  setPlayer,
  buildingsRef,
  buildingIDNumberRef
) => {
  // Increase building owned id
  let idNum = buildingIDNumberRef.current;
  idNum++;
  buildingIDNumberRef.current = idNum;

  // Pay for building
  let fundsAvailable = player.currencyData;
  // Funds
  let gold = fundsAvailable.gold;
  let cost = mouseBuildingAvailable.cost;
  let newAmount = gold - cost;
  // Buildings
  fundsAvailable.gold = newAmount;
  let array = buildingsRef.current;
  array.push(mouseBuildingAvailable);

  buildingsRef.current = array;

  let currentXp = player.currentXp;
  let buildingXp = mouseBuildingAvailable.xpForPurchasing;

  let newTotalXp = currentXp + buildingXp;

  setPlayer({
    ...player,
    currencyData: fundsAvailable,
    currentXp: newTotalXp,
  });
};

export const purchaseAndPlaceNewBuilding = (
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
) => {
  for (const tile of tiles) {
    // Convert mouse coordinates to isometric coordinates
    const isoX = (offsetX - tile.offX) / tile.tileColumnOffset;
    const isoY = (offsetY - tile.offY) / tile.tileRowOffset;

    // Check if the mouse is within the bounds of the tile
    if (isoX >= 0 && isoY >= 0 && isoX <= 1 && isoY <= 1 && isoX + isoY <= 1) {
      // Set building to tile position
      mouseBuildingAvailable.setPosition(tile.offX, tile.offY);

      // Buy with gems
      if (mouseBuildingAvailable.currencyType === 'gems') {
        completeBuildingPurchaseGems(
          player,
          mouseBuildingAvailable,
          setPlayer,
          buildingsRef,
          buildingIDNumberRef
        );
      }
      // Buy with gold
      if (mouseBuildingAvailable.currencyType === 'gold') {
        completeBuildingPurchaseGold(
          player,
          mouseBuildingAvailable,
          setPlayer,
          buildingsRef,
          buildingIDNumberRef
        );
      }
      // Break out of the loop to prevent further tiles from being clicked
      break;
    }
  }
  // delete building from ref
  mouseBuildingRef.current = null;
};

export const collectFromBuildingAndUpdateFunds = (
  offsetX,
  offsetY,
  building,
  context,
  goldCoinRef,
  canvasRef,
  drawCanvasElements,
  player,
  setPlayer
) => {
  if (building.payoutReady) {
    // Check if the mouse coordinates are within the bounds of the building
    if (
      offsetX >= building.offX &&
      offsetX <= building.offX + building.tileColumnOffset &&
      offsetY >= building.offY &&
      offsetY <= building.offY + building.tileRowOffset
    ) {
      // Collect the payout from the building
      // building.payoutReady = false;
      building.collectPayout();
      building.drawBuilding(context, goldCoinRef);

      // Redraw the canvas
      clearCanvas(canvasRef);
      drawCanvasElements();

      // Update player funds
      let fundsAvailable = player.currencyData;
      let income = building.incomeAmount;
      let current = fundsAvailable.gold;
      let newAmount = income + current;

      fundsAvailable.gold = newAmount;

      let currentXp = player.currentXp;
      let earnXp = 1;

      let newTotalXp = currentXp + earnXp;

      setPlayer({
        ...player,
        currencyData: fundsAvailable,
        currentXp: newTotalXp,
      });

      return;
    }
  }
};

export const buyNewTile = ({
  tileToPurchase,
  closeBuyTileModal,
  player,
  setPlayer,
  openCantAffordTileModal,
}) => {
  if (player.currencyData.gold < tileToPurchase.cost) {
    openCantAffordTileModal();
    closeBuyTileModal();
    return;
  }
  // Update tile
  tileToPurchase.isOwned = true;
  tileToPurchase.fillColour = ownedTileColourHex;
  tileToPurchase.isActive = false;

  // Update player funds
  let fundsAvailable = player.currencyData;
  let cost = tileToPurchase.cost;
  let playerGold = fundsAvailable.gold;
  let newAmount = playerGold - cost;
  fundsAvailable.gold = newAmount;

  // update player xp
  let xpAvailable = tileToPurchase.purchaseXp;
  let currentXp = player.currentXp;
  let newXpAmount = currentXp + xpAvailable;

  setPlayer({
    ...player,
    currencyData: fundsAvailable,
    currentXp: newXpAmount,
  });
console.log('player', player);
  client
    .post(
      `/player/buy-tile/${player.playerId}/${tileToPurchase.id}`,
      null,
      false
    )
    .then((res) => {
      console.log('res', res.data);
    })

    .catch((err) => {
      console.error('Unable to buy tile', err);
    });

  closeBuyTileModal();
};
