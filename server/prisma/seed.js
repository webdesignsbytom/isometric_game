import bcrypt from 'bcrypt';
import dbClient from '../src/utils/dbClient.js';

async function seed() {
  const password = await bcrypt.hash('123', 8);
  
  const testUser = await dbClient.user.create({
    data: {
      email: 'tom@tom.com',
      password: password,
      role: "MEMBER",
    },
  });
}

seed().catch(async (error) => {
  console.error(error);
  await dbClient.$disconnect();
  process.exit(1);
});
