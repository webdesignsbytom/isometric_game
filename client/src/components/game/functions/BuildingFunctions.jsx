// Data
import { BuildingsMenuArray } from '../../../utils/gameData/BuildingsData';
// Object
import { Building } from '../canvas/Building';

export const drawBuildingsOwnedByPlayer = (player, tilesRef, buildingsRef) => {

    let buildingOwnedArray = player.buildingsData.buildingsArray;

    let newArray = [];

    buildingOwnedArray.forEach((building) => {
      let buildingFound = BuildingsMenuArray.find(
        (e) => e.id === building.buildingIdNum
      );

      // Find building and create object
      if (buildingFound) {
        let tiles = tilesRef.current;

        let tileMatch = tiles.find(
          (tile) => tile.id === building.locationTileId
        );
          
        const newImg = new Image();
        newImg.src = require(`../../../assets/images${buildingFound.imageEndpoint}`)

        const newCreatedBuilding = new Building(
          building.buildingIdNum, // ID
          buildingFound.name, // building name lowercase
          buildingFound.title, // building name For Show
          newImg, // Image
          buildingFound.description, //description
          buildingFound.gridSize, // gridSize
          buildingFound.xpForPurchasing, // xp for
          buildingFound.cost, // Cost
          buildingFound.currencyType, // Gems/Gold
          buildingFound.incomeSeconds, // Time to produce
          buildingFound.incomeAmount, // Amount to produce
          buildingFound.incomeCurrency, // Gems/Gold to produce
          buildingFound.incomePeriod, // Text version of time
          buildingFound.constructionTime, // seconds to build
          buildingFound.constructionTimePeriod, // Text seconds to build
          buildingFound.constructionImage, // Construction image
          tileMatch.offX, // X pos
          tileMatch.offY, // Y pos
          buildingFound.imageHeight // Image height
        );
        newArray.push(newCreatedBuilding);
        // buildingFound.setPosition(tileMatch.offX, tileMatch.offY)
      }
    });

    buildingsRef.current = newArray;
  };