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
      console.log('PPPPPPPPPPPPPPP');
      building.payoutReady = true;
    }
    console.log('goldxon', goldCoinRef);
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
