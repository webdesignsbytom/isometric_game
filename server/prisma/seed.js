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
          playerLevel: 5,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 100,
          totalXp: 800,
          townName: 'space town',
          gold: 3333,
          gems: 2222,
        },
      },
    },
  });

  const userTiles = await dbClient.tile.createMany({
    data: [
			{
				"tileIdNum": 1,
				"playerId": '111',
			},
			{
				"tileIdNum": 2,
				"playerId": '111',
			},
			{
				"tileIdNum": 3,
				"playerId": '111',
			},
			{
				"tileIdNum": 4,
				"playerId": '111',
			}
		]
  })

  const testAdmin = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password: password,
      role: 'ADMIN',
      player: {
        create: {
          id: '222',
          playerName: 'Admin Guy',
          playerLevel: 5,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 100,
          totalXp: 800,
          townName: 'Adminiville',
          gold: 3333,
          gems: 2222,
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
				"tileIdNum": 1,
				"playerId": '222',
			},
			{
				"tileIdNum": 2,
				"playerId": '222',
			},
			{
				"tileIdNum": 3,
				"playerId": '222',
			},
			{
				"tileIdNum": 4,
				"playerId": '222',
			}
		]
  })

  const adminBuildings = await dbClient.building.createMany({
    data: [
			{
				"locationTileId": 1,
        "buildingIdNum": 1,
				"playerId": '222',
			},
			{
				"locationTileId": 2,
        "buildingIdNum": 2,
				"playerId": '222',
			},
			{
				"locationTileId": 3,
        "buildingIdNum": 3,
				"playerId": '222',
			},
			{
				"locationTileId": 4,
        "buildingIdNum": 4,
				"playerId": '222',
			}
		]
  })

  const testDev = await dbClient.user.create({
    data: {
      email: 'dev@dev.com',
      password: password,
      role: 'DEVELOPER',
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
