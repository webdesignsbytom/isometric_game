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