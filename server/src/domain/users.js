import dbClient from '../utils/dbClient.js';

export const findAllUsers = () =>
  dbClient.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      profile: true,
      player: true,
    },
  });

export const findUserByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
      player: true,
    },
  });

export const findUserLoginByEmail = (email) =>
  dbClient.user.findUnique({
    where: { email: email },
    include: {
      profile: true,
    },
  });

export const findUserByUsername = (username) =>
  dbClient.user.findFirst({
    where: {
      profile: {
        username: username,
      },
    },
  });

export const findUserById = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: true,
    },
  });

export const findUserByIdBasic = (userId) =>
  dbClient.user.findUnique({
    where: {
      id: userId,
    },
  });

export const resetUserLoginRecord = (recordId, newLoginTime) =>
  dbClient.loginRecord.update({
    where: {
      id: recordId,
    },
    data: {
      collectedReward: true,
      daysInARow: 1,
      lastLoginDateTime: newLoginTime,
    },
  });

export const findUsersByRole = (role) =>
  dbClient.user.findMany({
    where: {
      role: role,
    },
    include: {
      profile: true,
    },
  });

export const createUser = (email, password, username, country) =>
  dbClient.user.create({
    data: {
      email: email,
      password: password,
      profile: {
        create: {
          username: username,
          country: country,
        },
      },
      player: {
        create: {
          playerName: 'new user',
          playerLevel: 1,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 0,
          totalXp: 0,
          gold: 1000,
          gems: 500,
          city: {
            create: {
              cityName: '',
            },
          },
        },
      },
    },
    include: {
      player: true,
      profile: true,
    },
  });

export const createUserFromSandboxData = (email, password, username, country) =>
  dbClient.user.create({
    data: {
      email: email,
      password: password,
      profile: {
        create: {
          username: username,
          country: country,
        },
      },
      player: {
        create: {
          playerName: 'new user',
          playerLevel: 1,
          playerImage: '/static/media/user.de1d5839e4c2ea173e6d.png',
          currentXp: 0,
          totalXp: 0,
          gold: 1000,
          gems: 500,
          city: {
            create: {
              cityName: '',
            },
          },
        },
      },
    },
    include: {
      player: true,
      profile: true,
    },
  });

export const findVerification = (userId) =>
  dbClient.userVerification.findUnique({
    where: {
      userId: userId,
    },
  });

export const createStarterTiles = (userId, playerId) =>
  dbClient.tile.createMany({
    data: [
      { tileIdNum: 95, playerId: playerId },
      { tileIdNum: 96, playerId: playerId },
      { tileIdNum: 97, playerId: playerId },
      { tileIdNum: 98, playerId: playerId },
      { tileIdNum: 99, playerId: playerId },
      { tileIdNum: 100, playerId: playerId },
      { tileIdNum: 110, playerId: playerId },
      { tileIdNum: 111, playerId: playerId },
      { tileIdNum: 112, playerId: playerId },
      { tileIdNum: 113, playerId: playerId },
      { tileIdNum: 114, playerId: playerId },
      { tileIdNum: 115, playerId: playerId },
      { tileIdNum: 125, playerId: playerId },
      { tileIdNum: 126, playerId: playerId },
      { tileIdNum: 127, playerId: playerId },
      { tileIdNum: 128, playerId: playerId },
      { tileIdNum: 129, playerId: playerId },
      { tileIdNum: 130, playerId: playerId },
      { tileIdNum: 140, playerId: playerId },
      { tileIdNum: 141, playerId: playerId },
      { tileIdNum: 142, playerId: playerId },
      { tileIdNum: 143, playerId: playerId },
      { tileIdNum: 144, playerId: playerId },
      { tileIdNum: 145, playerId: playerId },
      { tileIdNum: 155, playerId: playerId },
      { tileIdNum: 156, playerId: playerId },
      { tileIdNum: 157, playerId: playerId },
      { tileIdNum: 158, playerId: playerId },
      { tileIdNum: 159, playerId: playerId },
      { tileIdNum: 160, playerId: playerId },
      { tileIdNum: 170, playerId: playerId },
      { tileIdNum: 171, playerId: playerId },
      { tileIdNum: 172, playerId: playerId },
      { tileIdNum: 173, playerId: playerId },
      { tileIdNum: 174, playerId: playerId },
      { tileIdNum: 175, playerId: playerId },
    ],
  });

export const findResetRequest = (userId) =>
  dbClient.passwordReset.findUnique({
    where: {
      userId: userId,
    },
  });

export const resetUserPassword = (userId, password) =>
  dbClient.user.update({
    where: {
      id: userId,
    },
    data: {
      password: password,
    },
  });

export const deleteUserById = (userId) =>
  dbClient.user.delete({
    where: {
      id: userId,
    },
  });
