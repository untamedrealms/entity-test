const express = require('express');
const router = express.Router();

const { createAgent, getAgent, updateAgent, deleteAgent } = require('./agents_handler.js');
const { createGame, getGame, updateGame, deleteGame } = require('./games_handler.js');

// Agent API endpoints
router.post('/agent', createAgent);
router.get('/agent/:id', getAgent);
router.put('/agent/:id', updateAgent);
router.delete('/agent/:id', deleteAgent);

// Game API endpoints
router.post('/game', createGame);
router.get('/game/:id', getGame);
router.put('/game/:id', updateGame);
router.delete('/game/:id', deleteGame);

module.exports = router;