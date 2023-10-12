import { Router } from 'express'
import {
    validateAuthentication,
    validateAdminRole,
  } from '../middleware/auth.js';
import { getPlayerBuildings, getPlayerById, getPlayerTiles } from '../controllers/player.js';

const router = Router()

router.get('/get-player-by-id/:userId', getPlayerById)
router.get('/get-player-tiles/:playerId', getPlayerTiles)
router.get('/get-player-buildings/:playerId', getPlayerBuildings)

export default router
