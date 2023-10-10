import { Building } from '../components/game/canvas/Building';
import { BuildingsMenuArray } from './gameData/BuildingsData';
// Images
import PlayerImg from '../assets/images/game/player/user.png'

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
  1,
  building1.name,
  buildingImage1,
  100,
  100,
  100,
  'gold',
  building1.incomeSeconds,
  building1.incomeAmount
);
const tempBuilding2 = new Building(
  2,
  building2.name,
  buildingImage2,
  300,
  300,
  100,
  'gold',
  building2.incomeSeconds,
  building2.incomeAmount
);

export const tempPlayerData = {
  playerName: 'Tom',
  playerID: 1,
  townData: {
    townName: 'Rascleville',
  },
  playerLevel: 1,
  playerImage: PlayerImg,
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
