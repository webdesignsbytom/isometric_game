import { Router } from 'express'
import {
    validateAuthentication,
    validateAdminRole,
  } from '../middleware/auth.js';
import { getPlayerById, getPlayerTiles } from '../controllers/player.js';

const router = Router()

router.get('/get-player-by-id/:userId', getPlayerById)
router.get('/get-player-tiles/:playerId', getPlayerTiles)

export default router
