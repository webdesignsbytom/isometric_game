import Bld1 from '../../assets/images/game/buildings/buildings/bld.png';
import Bld2 from '../../assets/images/game/buildings/buildings/bld2.png';
import Bld3 from '../../assets/images/game/buildings/buildings/bld3.png';
import Bld4 from '../../assets/images/game/buildings/services/small_hospital.png';
import Bld5 from '../../assets/images/game/buildings/buildings/bld5.png';
import Bld6 from '../../assets/images/game/buildings/buildings/bld6.png';
import Bld7 from '../../assets/images/game/buildings/buildings/bld7.png';
import Bld8 from '../../assets/images/game/buildings/buildings/bld8.png';
import Bld9 from '../../assets/images/game/buildings/buildings/bld9.png';
import Bld10 from '../../assets/images/game/buildings/buildings/bld10.png';
import Bld11 from '../../assets/images/game/buildings/buildings/bld11.png';
import Bld12 from '../../assets/images/game/buildings/buildings/bld12.png';
import Bld13 from '../../assets/images/game/buildings/buildings/bld13.png';
import Bld14 from '../../assets/images/game/buildings/buildings/bld14.png';
import Cafe1 from '../../assets/images/game/buildings/shops/cafe1.png';
import Shop1 from '../../assets/images/game/buildings/shops/shop1.png';
import Shop2 from '../../assets/images/game/buildings/shops/shop2.png';
import Home1 from '../../assets/images/game/buildings/buildings/home1.png';
import Home2 from '../../assets/images/game/buildings/buildings/home2.png';
import Home3 from '../../assets/images/game/buildings/buildings/home3.png';
import Park1 from '../../assets/images/game/buildings/parks/park.png';
import Park2 from '../../assets/images/game/buildings/parks/park2.png';
import Park3 from '../../assets/images/game/buildings/parks/park3.png';
import Park4 from '../../assets/images/game/buildings/parks/park4.png';
import Park5 from '../../assets/images/game/buildings/parks/park5.png';
import Park6 from '../../assets/images/game/buildings/parks/park6.png';
import Park7 from '../../assets/images/game/buildings/parks/park7.png';
import Park8 from '../../assets/images/game/buildings/parks/park8.png';
import Park9 from '../../assets/images/game/buildings/parks/park9.png';
// Construction image
import Construction1 from '../../assets/images/game/buildings/construction/construction-step1.png';
import Construction2 from '../../assets/images/game/buildings/construction/construction-step2.png';

export const BuildingsMenuArray = [
  {
    id: 1,
    name: 'building_1',
    title: 'Building 1',
    imageUrl: Bld1,
    description: 'A building',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeSeconds: 3000,
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 3000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    imageHeight: 60,
  },
  {
    id: 2,
    name: 'building_2',
    title: 'Building 2',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 100,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld2,
    description: 'A building',
  },

  {
    id: 3,
    name: 'building_3',
    title: 'Building 3',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gems',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld3,
    description: 'A building',
  },

  {
    id: 4,
    name: 'building_4',
    title: 'Building 4',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 100,
    currencyType: 'gems',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld4,
    description: 'A building',
  },

  {
    id: 5,
    name: 'building_5',
    title: 'Building 5',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 250000,
    currencyType: 'gold',
    incomeAmount: 1000,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction2,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld5,
    description: 'A building',
  },

  {
    id: 6,
    name: 'building_6',
    title: 'Building 6',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction2,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 100,
    imageUrl: Bld6,
    description: 'A building',
  },

  {
    id: 7,
    name: 'building_7',
    title: 'Building 7',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld7,
    description: 'A building',
  },

  {
    id: 8,
    name: 'building_8',
    title: 'Building 8',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld8,
    description: 'A building',
  },

  {
    id: 9,
    name: 'building_9',
    title: 'Building 9',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld9,
    description: 'A building',
  },

  {
    id: 10,
    name: 'building_10',
    title: 'Building 10',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld10,
    description: 'A building',
  },

  {
    id: 11,
    name: 'building_11',
    title: 'Building 11',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld11,
    description: 'A building',
  },

  {
    id: 12,
    name: 'building_12',
    title: 'Building 12',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld12,
    description: 'A building',
  },

  {
    id: 13,
    name: 'building_13',
    title: 'Building 13',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld13,
    description: 'A building',
  },

  {
    id: 14,
    name: 'building_14',
    title: 'Building 14',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Bld14,
    description: 'A building',
  },

  {
    id: 15,
    name: 'cafe_1',
    title: 'Cafe 1',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Cafe1,
    description: 'A building',
  },

  {
    id: 16,
    name: 'home_1',
    title: 'Home 1',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Home1,
    description: 'A building',
  },

  {
    id: 17,
    name: 'home_2',
    title: 'Home 2',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Home2,
    description: 'A building',
  },

  {
    id: 18,
    name: 'home_3',
    title: 'Home 3',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Home3,
    description: 'A building',
  },

  {
    id: 19,
    name: 'shop_1',
    title: 'Shop 1',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Shop1,
    description: 'A building',
  },

  {
    id: 20,
    name: 'shop_2',
    title: 'Shop 2',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Shop2,
    description: 'A building',
  },

  {
    id: 21,
    name: 'cafe_1',
    title: 'Cafe 1',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: '1 minute',
    constructionTime: 60000,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: 60000,
    imageHeight: 60,
    imageUrl: Cafe1,
    description: 'A building',
  },

  {
    id: 22,
    name: 'park_1',
    title: 'Park 1',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park1,
    description: 'A building',
  },

  {
    id: 23,
    name: 'park_2',
    title: 'Park 2',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park2,
    description: 'A building',
  },

  {
    id: 24,
    name: 'park_3',
    title: 'Park 3',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park3,
    description: 'A building',
  },

  {
    id: 25,
    name: 'park_4',
    title: 'Park 4',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park4,
    description: 'A building',
  },

  {
    id: 26,
    name: 'park_5',
    title: 'Park 5',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park5,
    description: 'A building',
  },

  {
    id: 27,
    name: 'park_6',
    title: 'Park 6',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park6,
    description: 'A building',
  },

  {
    id: 28,
    name: 'park_7',
    title: 'Park 7',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park7,
    description: 'A building',
  },

  {
    id: 29,
    name: 'park_8',
    title: 'Park 8',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park8,
    description: 'A building',
  },

  {
    id: 30,
    name: 'park_9',
    title: 'Park 9',
    gridSize: 1,
    xpForPurchasing: 10,
    cost: 25,
    currencyType: 'gold',
    incomeAmount: 10,
    incomeCurrency: 'gold',
    incomePeriod: null,
    constructionTime: null,
    constructionTimePeriod: '1 minute',
    constructionImage: Construction1,
    underConstruction: false,
    incomeSeconds: null,
    imageHeight: 60,
    imageUrl: Park9,
    description: 'A building',
  },
];
