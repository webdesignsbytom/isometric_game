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
  buildingsRef
) => {
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
  buildingsRef
) => {
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

export const drawCanvasElements = (
  contextRef,
  buildingsRef,
  goldCoinRef,
  tilesRef
) => {
  drawTileGrid(contextRef, tilesRef);
  drawBuildingElements(contextRef, buildingsRef, goldCoinRef);

  // Cause moue building to be under grid
  // requestAnimationFrame(drawCanvasElements);
};
