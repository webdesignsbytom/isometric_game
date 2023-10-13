import dbClient from '../utils/dbClient.js';

export const findPlayerByUserId = (userId) =>
  dbClient.player.findUnique({
    where: {
      userId: userId,
    },
  });

export const findTilesByplayerId = (playerId) =>
  dbClient.tile.findMany({
    where: {
      playerId: playerId,
    },
  });
  
export const findBuildingsByplayerId = (playerId) =>
  dbClient.building.findMany({
    where: {
      playerId: playerId,
    },
  });

export const findTroopsByplayerId = (playerId) =>
  dbClient.troop.findMany({
    where: {
      playerId: playerId,
    },
  });

export const findAchievementsByplayerId = (playerId) =>
  dbClient.achievement.findMany({
    where: {
      playerId: playerId,
    },
  });

export const createNewTileForPlayer = (playerId, tileId)  =>
  dbClient.tile.create({
    data: {
      playerId: playerId,
      tileIdNum: tileId
    },
  });