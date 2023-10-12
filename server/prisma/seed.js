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

  const testAdmin = await dbClient.user.create({
    data: {
      email: 'admin@admin.com',
      password: password,
      role: 'ADMIN',
      player: {
        create: {
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
