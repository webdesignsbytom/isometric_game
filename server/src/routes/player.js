import { Router } from 'express'
import {
    validateAuthentication,
    validateAdminRole,
  } from '../middleware/auth.js';
import { buyNewTile, getPlayerAchievements, getPlayerBuildings, getPlayerById, getPlayerTiles, getPlayerTroops } from '../controllers/player.js';

const router = Router()

router.get('/get-player-by-id/:userId', getPlayerById)
router.get('/get-player-tiles/:playerId', getPlayerTiles)
router.get('/get-player-buildings/:playerId', getPlayerBuildings)
router.get('/get-player-troops/:playerId', getPlayerTroops)
router.get('/get-player-achievements/:playerId', getPlayerAchievements)
router.post('/buy-tile/:playerId/:tileId', buyNewTile)

export default router
