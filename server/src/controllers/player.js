import {
  findTilesByPlayerId,
  findPlayerByUserId,
  findBuildingsByPlayerId,
  findTroopsByPlayerId,
  findAchievementsByPlayerId,
  createNewTileForPlayer,
  createNewBuildingForPlayer,
  updatePlayerDataXpAndLevel,
  updatePlayerFundsData,
  updatePlayerOnLevelComplete,
  updateCityOnLevelComplete,
  updateBattleOnLevelComplete,
  updatePlayerAfterTilePurchase,
} from '../domain/player.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import {
  BadRequestEvent,
  MissingFieldEvent,
  NotFoundEvent,
  ServerErrorEvent,
} from '../event/utils/errorUtils.js';
import {
  levelIncreaseBattleDataNum,
  levelIncreaseBattleHealthDataNum,
  levelIncreaseCityDefenseDataNum,
  levelIncreaseCityHealthDataNum,
} from '../game/constants.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getPlayerById = async (req, res) => {
  const { userId } = req.params;

  try {
    const foundPlayer = await findPlayerByUserId(userId);
    if (!foundPlayer) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.playerNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { player: foundPlayer });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.player, `Get player by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPlayerTiles = async (req, res) => {
  const { playerId } = req.params;

  try {
    const foundTiles = await findTilesByPlayerId(playerId);

    if (!foundTiles) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.tilesNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (foundTiles.length < 1) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.tilesDbEmpty
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { tiles: foundTiles });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Get player tiles by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPlayerBuildings = async (req, res) => {
  const { playerId } = req.params;

  try {
    const foundBuildings = await findBuildingsByPlayerId(playerId);

    if (!foundBuildings) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.buildingsNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (foundBuildings.length < 1) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.buildingsDbEmpty
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { buildings: foundBuildings });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Get player buildings by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPlayerTroops = async (req, res) => {
  const { playerId } = req.params;

  try {
    const foundTroops = await findTroopsByPlayerId(playerId);

    if (!foundTroops) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.troopsNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (foundTroops.length < 1) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.troopsDbEmpty
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { troops: foundTroops });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Get player troops by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const getPlayerAchievements = async (req, res) => {
  const { playerId } = req.params;

  try {
    const foundAchievements = await findAchievementsByPlayerId(playerId);

    if (!foundAchievements) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.achievementsNotFound
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    if (foundAchievements.length < 1) {
      const notFound = new NotFoundEvent(
        req.player,
        EVENT_MESSAGES.notFound,
        EVENT_MESSAGES.achievementsDbEmpty
      );
      myEmitterErrors.emit('error', notFound);
      return sendMessageResponse(res, notFound.code, notFound.message);
    }

    return sendDataResponse(res, 200, { achievements: foundAchievements });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Get player achievements by ID`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const buyNewTile = async (req, res) => {
  const { playerId, tileId } = req.params;
  const { newAmount, newXpAmount, currentXp } = req.body;
  console.log('{ newAmount, newXpAmount }', newAmount, newXpAmount);
  let newId = Number(tileId);
  try {
    // Check missing data
    if (!playerId || !tileId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const newTile = await createNewTileForPlayer(playerId, newId);
    console.log('newTile', newTile);

    const updatedPlayer = await updatePlayerAfterTilePurchase(
      playerId,
      newAmount,
      newXpAmount,
      currentXp
    );
    console.log('updatedPlayer', updatedPlayer);
    return sendDataResponse(res, 200, { tile: newTile });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(req.player, `Buy new tile error`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const buyNewBuilding = async (req, res) => {
  const { playerId, buildingId, tileId } = req.params;

  let newBuildingId = Number(buildingId);
  let newTileId = Number(tileId);
  try {
    // Check missing data
    if (!playerId || !buildingId || !tileId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const newBuilding = await createNewBuildingForPlayer(
      playerId,
      newBuildingId,
      newTileId
    );
    console.log('newBuilding', newBuilding);

    return sendDataResponse(res, 200, { building: newBuilding });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Buy new building error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const updatePlayerData = async (req, res) => {
  const { playerId } = req.params;
  const { currentXp, totalXp, playerLevel } = req.body;

  try {
    // Check missing data
    if (!playerId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const updatedPlayer = await updatePlayerDataXpAndLevel(
      playerId,
      currentXp,
      totalXp,
      playerLevel
    );

    return sendDataResponse(res, 200, { updatedPlayer: updatedPlayer });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Update player xp error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const updatePlayerFunds = async (req, res) => {
  const { playerId } = req.params;
  const { gold, gems } = req.body;

  console.log('playerID', playerId, gold, gems);
  try {
    // Check missing data
    if (!playerId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Registration: Missing Field/s event'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    const updatedPlayer = await updatePlayerFundsData(playerId, gold, gems);

    return sendDataResponse(res, 200, { updatedPlayer: updatedPlayer });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Updating player funds error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};

export const levelCompletedPlayerUpdate = async (req, res) => {
  console.log(
    'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  );
  const { playerId } = req.params;
  const {
    currencyData,
    cityData,
    playerLevel,
    currentXp,
    totalXp,
    battleData,
  } = req.body;
  console.log(
    'SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS',
    currencyData,
    cityData,
    playerLevel,
    currentXp,
    totalXp,
    battleData
  );
  try {
    // Check missing data
    if (!playerId) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Update: Missing Field/s event playerId'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    if (!playerLevel) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Update: Missing Field/s event playerLevel'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    if (!totalXp) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Update: Missing Field/s event totalXp'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    if (!battleData) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Update: Missing Field/s event missingField'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    if (!currencyData) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Update: Missing Field/s event currencyData'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }
    if (!cityData) {
      //
      const missingField = new MissingFieldEvent(
        null,
        'Update: Missing Field/s event cityData'
      );
      myEmitterErrors.emit('error', missingField);
      return sendMessageResponse(res, missingField.code, missingField.message);
    }

    // Update player
    const updatedPlayer = await updatePlayerOnLevelComplete(
      playerId,
      playerLevel,
      currentXp,
      totalXp,
      currencyData.gold,
      currencyData.gems
    );

    if (!updatedPlayer) {
      const notCreated = new BadRequestEvent(
        EVENT_MESSAGES.badRequest,
        EVENT_MESSAGES.updatePlayerFail
      );
      myEmitterErrors.emit('error', notCreated);
      return sendMessageResponse(res, notCreated.code, notCreated.message);
    }

    // Update city
    let newCityDefense = cityData.cityDefense + levelIncreaseCityDefenseDataNum;
    let newCityHealth = cityData.cityHealth + levelIncreaseCityHealthDataNum;

    const updatedCity = await updateCityOnLevelComplete(
      playerId,
      newCityDefense,
      newCityHealth
    );

    // Update Battle
    let newStrength = battleData.strength + levelIncreaseBattleDataNum;
    let newDefense = battleData.defense + levelIncreaseBattleDataNum;
    let newSpeed = battleData.speed + levelIncreaseBattleDataNum;
    let newAccuracy = battleData.accuracy + levelIncreaseBattleDataNum;
    let newHealth = battleData.health + levelIncreaseBattleHealthDataNum;

    const updatedBattle = await updateBattleOnLevelComplete(
      playerId,
      newStrength,
      newDefense,
      newSpeed,
      newAccuracy,
      newHealth
    );

    return sendDataResponse(res, 200, {
      player: updatedPlayer,
      city: updatedCity,
      battle: updatedBattle,
    });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Level completed player update error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
