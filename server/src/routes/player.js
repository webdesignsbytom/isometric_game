import { Router } from 'express'
import {
    validateAuthentication,
    validateAdminRole,
  } from '../middleware/auth.js';
import { buyNewBuilding, buyNewTile, getPlayerAchievements, getPlayerBuildings, getPlayerById, getPlayerTiles, getPlayerTroops, updatePlayerData } from '../controllers/player.js';

const router = Router()

router.get('/get-player-by-id/:userId', getPlayerById)
router.get('/get-player-tiles/:playerId', getPlayerTiles)
router.get('/get-player-buildings/:playerId', getPlayerBuildings)
router.get('/get-player-troops/:playerId', getPlayerTroops)
router.get('/get-player-achievements/:playerId', getPlayerAchievements)
router.post('/buy-tile/:playerId/:tileId', buyNewTile)
router.post('/buy-building/:playerId/:buildingId/:tileId', buyNewBuilding)
router.patch('/:playerId/update-player-data', updatePlayerData)

export default router
