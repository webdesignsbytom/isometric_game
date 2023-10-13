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
      playerLevel,
      currentXp,
      totalXp,
      gold,
      gems
) =>
  dbClient.player.update({
    where: {
      id: playerId,
    },
    data: {
      playerLevel: playerLevel,
      currentXp: currentXp,
      totalXp: totalXp,
      gold: gold,
      gems: gems
    },
  });

export const updateCityOnLevelComplete = (playerId, newCityDefense, newCityHealth) =>
  dbClient.city.update({
    where: {
      playerId: playerId,
    },
    data: {
      cityHealth: newCityHealth,
      cityDefense: newCityDefense,
    },
  });

export const updateBattleOnLevelComplete = (playerId, newStrength, newDefense, newSpeed, newAccuracy, newHealth) =>
  dbClient.battle.update({
    where: {
      playerId: playerId,
    },
    data: {
       strength: newStrength,
       accuracy: newAccuracy,
       speed: newSpeed,
       defense: newDefense,
       health: newHealth,
    },
  });

export const updatePlayerAfterTilePurchase = (playerId, newAmount, newXpAmount, currentXp) =>
  dbClient.player.update({
    where: {
      id: playerId,
    },
    data: {
       gold: newAmount,
       totalXp: newXpAmount,
       currentXp: currentXp,
    },
  });
