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

export const findTroopsByPlayerId = (playerId) =>
  dbClient.troop.findMany({
    where: {
      playerId: playerId,
    },
  });

export const findAchievementsByPlayerId = (playerId) =>
  dbClient.achievement.findMany({
    where: {
      playerId: playerId,
    },
  });

export const createNewTileForPlayer = (playerId, tileId) =>
  dbClient.tile.create({
    data: {
      playerId: playerId,
      tileIdNum: tileId,
    },
  });

export const createNewBuildingForPlayer = (playerId, buildingId, tileId) =>
  dbClient.building.create({
    data: {
      playerId: playerId,
      buildingIdNum: buildingId,
      locationTileId: tileId,
    },
  });

export const updatePlayerDataXpAndLevel = (
  playerId,
  currentXp,
  totalXp,
  playerLevel
) =>
  dbClient.player.update({
    where: {
      id: playerId,
    },
    data: {
      currentXp: currentXp,
      totalXp: totalXp,
      playerLevel: playerLevel,
    },
  });

export const updatePlayerFundsData = (
  playerId,
  gold,
      gems
) =>
  dbClient.player.update({
    where: {
      id: playerId,
    },
    data: {
      gold: gold,
      gems: gems
    },
  });

export const updatePlayerOnLevelComplete = (
  playerId,
  gold,
  gems
) =>
  dbClient.player.update({
    where: {
      id: playerId,
    },
    data: {
      gold: gold,
      gems: gems
    },
  });
