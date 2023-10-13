import {
  findTilesByplayerId,
  findPlayerByUserId,
  findBuildingsByplayerId,
  findTroopsByplayerId,
  findAchievementsByplayerId,
  createNewTileForPlayer,
} from '../domain/player.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { MissingFieldEvent, NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
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
    const foundTiles = await findTilesByplayerId(playerId);

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
    const foundBuildings = await findBuildingsByplayerId(playerId);

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
    const foundTroops = await findTroopsByplayerId(playerId);

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
    const foundAchievements = await findAchievementsByplayerId(playerId);

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
  console.log('playerId', playerId);
  console.log('tileId', tileId);
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

    const newTile = await createNewTileForPlayer(playerId, newId) 
    console.log('newTile', newTile);

    return sendDataResponse(res, 200, { tile: newTile });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.player,
      `Buy new tile error`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
