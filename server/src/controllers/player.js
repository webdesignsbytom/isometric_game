import {
  findTilesByPlayerId,
  findPlayerByUserId,
  findBuildingsByPlayerId,
  findTroopsByPlayerId,
  findAchievementsByPlayerId,
} from '../domain/player.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
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
