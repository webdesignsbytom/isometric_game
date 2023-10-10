import { Building } from '../../components/game/canvas/Building';
import { BuildingsMenuArray } from './BuildingsData';
// Images
import PlayerImg from '../../assets/images/game/player/user.png';

export const tempUserData = {
  id: 1,
  username: 'tom',
  email: 'tom@tom.com',
};

const buildingImage1 = new Image();
const buildingImage2 = new Image();

let building1 = BuildingsMenuArray[0];
let building2 = BuildingsMenuArray[1];

buildingImage1.src = building1.imageUrl;
buildingImage2.src = building2.imageUrl;

// const tempBuilding1 = new Building(1, building1.name, buildingImage1, 100, 100, 100, 100);
// const tempBuilding2 = new Building(2, building2.name, buildingImage2, 300, 300, 100, 100);
const tempBuilding1 = new Building(
  1, // ID
  building1.name, // building name lowercase
  building1.title, // building name For Show
  buildingImage1, // Image
  building1.description, //description
  building1.gridSize, // gridSize
  building1.xpForPurchasing, // xp for purchase
  building1.cost, // Cost
  building1.currencyType, // Gems/Gold
  building1.incomeSeconds, // Time to produce
  building1.incomeAmount, // Amount to produce
  building1.incomeCurrency, // Gems/Gold to produce
  building1.incomePeriod, // Text version of time
  building1.constructionTime, // seconds to build
  building1.constructionTimePeriod, // Text seconds to build
  building1.constructionImage, // Construction image
  100, // X pos
  100, // Y pos
  building1.imageHeight // Image height
);
const tempBuilding2 = new Building(
  2, // ID
  building2.name, // building name lowercase
  building2.title, // building name For Show
  buildingImage2, // Image
  building2.description, //description
  building2.gridSize, // gridSize
  building2.xpForPurchasing, // xp for
  building2.cost, // Cost
  building2.currencyType, // Gems/Gold
  building2.incomeSeconds, // Time to produce
  building2.incomeAmount, // Amount to produce
  building2.incomeCurrency, // Gems/Gold to produce
  building2.incomePeriod, // Text version of time
  building2.constructionTime, // seconds to build
  building2.constructionTimePeriod, // Text seconds to build
  building2.constructionImage, // Construction image
  100, // X pos
  100, // Y pos
  building2.imageHeight // Image height
);

export const tempPlayerData = {
  playerName: 'Tom',
  playerID: 1,
  townData: {
    townName: 'Rascleville',
  },
  playerLevel: 1,
  playerImage: PlayerImg,
  currentXp: 25,
  currencyData: {
    gold: 1000,
    gems: 500,
  },
  tileData: {
    tilePrice: 1,
    tilesOwned: 10,
    tilesArray: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 21 },
      { id: 22 },
    ],
  },
  buildingsData: {
    buildingsOwned: 0,
    buildingsArray: [tempBuilding1, tempBuilding2],
  },
};
