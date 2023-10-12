import { findTilesByPlayerId, findPlayerByUserId } from '../domain/player.js';
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
    const serverError = new ServerErrorEvent(req.player, `Get player by ID`);
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
