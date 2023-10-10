// Data
import { ownedTileColourHex, unownedTileColourHex } from '../../../utils/gameData/Constants';
// Components
import { Tile } from '../canvas/Tile';

export const createTileGrid = (
  originX,
  originY,
  maxGridXLength,
  maxGridYLength,
  tileColumnOffset,
  tileRowOffset,
  tilesRef
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
        const tile = new Tile(id, offX, offY, ownedTileColourHex, 'black', preownedTile);
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

  setPlayer({
    ...player,
    currencyData: fundsAvailable,
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

  setPlayer({
    ...player,
    currencyData: fundsAvailable,
  });
};
