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
          townName: 'Rascleville',
          gold: 1000,
          gems: 500,
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
      { tileIdNum: 1, playerId: playerId },
      { tileIdNum: 2, playerId: playerId }, // Duplicate unique key!
      { tileIdNum: 3, playerId: playerId },
      { tileIdNum: 4, playerId: playerId },
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
