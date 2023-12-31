import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const testUser = await dbClient.user.create({
    data: {
      email: 'tom@tom.com',
      password: password,
      role: 'MEMBER',
      profile: {
        create: {
          username: `tom test`,
          country: 'uk',
        },
      },
      player: {
        create: {
          id: '111',
          playerName: 'CPT Joe',
          playerLevel: 1,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 0,
          totalXp: 0,
          gold: 1000,
          gems: 500,
          city: {
            create: {
              cityName: 'space town',
            }
          },
          battle: {
            create: {}
          }
        },
      },
      
    },
  });

  const userTiles = await dbClient.tile.createMany({
    data: [

      {
        tileIdNum: 110,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 111,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 112,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 113,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 114,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 115,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 125,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 126,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 127,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 128,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 129,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 130,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 140,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 141,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 142,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 143,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 144,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 145,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 155,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 156,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 157,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 158,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 159,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 160,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 170,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 171,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 172,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 173,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 174,
        playerId: '111',
        hasBuilding: true,
      },
      {
        tileIdNum: 175,
        playerId: '111',
        hasBuilding: true,
      },
    ],
  });

  const testAdmin = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password: password,
      role: 'ADMIN',
      player: {
        create: {
          id: '222',
          playerName: 'Admin Guy',
          playerLevel: 1,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 0,
          totalXp: 0,
          gold: 2000,
          gems: 1000,
          city: {
            create: {
              cityName: 'Adminiville',
            }
          },
          battle: {
            create: {}
          }
        },
      },
      profile: {
        create: {
          username: `admin guy`,
          country: 'uk',
        },
      },
      
    },
  });

  const adminTiles = await dbClient.tile.createMany({
    data: [

      {
        tileIdNum: 110,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 111,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 112,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 113,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 114,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 115,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 125,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 126,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 127,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 128,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 129,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 130,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 140,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 141,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 142,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 143,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 144,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 145,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 155,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 156,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 157,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 158,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 159,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 160,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 170,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 171,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 172,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 173,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 174,
        playerId: '222',
        hasBuilding: true,
      },
      {
        tileIdNum: 175,
        playerId: '222',
        hasBuilding: true,
      },
    ],
  });

  const adminBuildings = await dbClient.building.createMany({
    data: [
      {
        locationTileId: 110,
        buildingIdNum: 1,
        playerId: '222',
      },
      {
        locationTileId: 111,
        buildingIdNum: 2,
        playerId: '222',
      },
      {
        locationTileId: 112,
        buildingIdNum: 3,
        playerId: '222',
      },
      {
        locationTileId: 113,
        buildingIdNum: 4,
        playerId: '222',
      },
    ],
  });

  const mainDev = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password: password,
      role: 'DEVELOPER',
      player: {
        create: {
          id: 'tomdev',
          playerName: 'DevTom',
          playerLevel: 1,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 0,
          totalXp: 0,
          gold: 100000,
          gems: 100000,
          city: {
            create: {
              cityName: 'DevVilles',
            }
          },
          battle: {
            create: {
              strength: 1000,
              defense: 1000,
              speed: 1000,
              accuracy: 1000,
              health: 100000,
            }
          }
        },
      },
      profile: {
        create: {
          username: `Tom`,
          country: 'united kingdom',
        },
      },
      
    },
  });

  const devBuildings = await dbClient.building.createMany({
    data: [
      {
        locationTileId: 1,
        buildingIdNum: 1,
        playerId: 'tomdev',
      },
      {
        locationTileId: 2,
        buildingIdNum: 2,
        playerId: 'tomdev',
      },
      {
        locationTileId: 3,
        buildingIdNum: 3,
        playerId: 'tomdev',
      },
      {
        locationTileId: 4,
        buildingIdNum: 4,
        playerId: 'tomdev',
      },
    ],
  });

  const devTiles = await dbClient.tile.createMany({
    data: [
      {
        tileIdNum: 110,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 111,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 112,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 113,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 114,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 115,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 125,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 126,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 127,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 128,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 129,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 130,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 140,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 141,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 142,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 143,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 144,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 145,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 155,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 156,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 157,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 158,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 159,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 160,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 170,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 171,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 172,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 173,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 174,
        playerId: 'tomdev',
        hasBuilding: true,
      },
      {
        tileIdNum: 175,
        playerId: 'tomdev',
        hasBuilding: true,
      },
    ],
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
