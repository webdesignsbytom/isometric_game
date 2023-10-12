import dbClient from '../utils/dbClient.js';

export const findPlayerByUserId = (userId) =>
  dbClient.player.findUnique({
    where: {
      userId: userId,
    },
  });

export const findTilesByPlayerId = (playerId) =>
  dbClient.tile.findMany({
    where: {
      playerId: playerId,
    },
  });
  
export const findBuildingsByPlayerId = (playerId) =>
  dbClient.building.findMany({
    where: {
      playerId: playerId,
    },
  });