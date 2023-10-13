import { Building } from '../../components/game/Objects/Building';
// Data
import { BuildingsMenuArray } from './BuildingsData';
// Images
import PlayerImg from '../../assets/images/game/player/user.png';

export const tempUserData = {
  id: 1,
  email: 'tom@tom.com',
};

const buildingImage1 = new Image();
const buildingImage2 = new Image();

let building1 = BuildingsMenuArray[0];
let building2 = BuildingsMenuArray[1];

buildingImage1.src = building1.imageUrl;
buildingImage2.src = building2.imageUrl;

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
  playerName: 'new user',
  playerId: null,
  playerLevel: 1,
  playerImage: PlayerImg,
  currentXp: 0,
  totalXp: 0,
  cityData: {
    cityName: 'Rascleville',
    cityHealth: 1000,
    cityDefense: 10,
  },
  currencyData: {
    gold: 1000,
    gems: 500,
  },
  battleData: {
    strength: 10,
    defense: 10,
    health: 100,
    speed: 10,
    accuracy: 10,
  },
  tileData: { tilesOwned: 0, tilesArray: [] },
  buildingsData: {
    buildingsOwned: 0,
    buildingsArray: [],
  },
};
