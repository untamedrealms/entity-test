```javascript
const assert = require('assert');
const { createAgent, getAgent, updateAgent, deleteAgent, createGame, getGame, updateGame, deleteGame } = require('./utils/database_interaction');

describe('Agent Tests', () => {
  it('should create a new agent', async () => {
    const agent = { name: 'Test Agent', game: 'Test Game' };
    const response = await createAgent(agent);
    assert(response.status === 200);
    assert(response.data.name === agent.name);
    assert(response.data.game === agent.game);
    agentList.push(response.data);
  });

  it('should get an agent', async () => {
    const response = await getAgent(agentList[0].id);
    assert(response.status === 200);
    assert(response.data.name === agentList[0].name);
    assert(response.data.game === agentList[0].game);
  });

  it('should update an agent', async () => {
    const updatedAgent = { name: 'Updated Agent', game: 'Updated Game' };
    const response = await updateAgent(agentList[0].id, updatedAgent);
    assert(response.status === 200);
    assert(response.data.name === updatedAgent.name);
    assert(response.data.game === updatedAgent.game);
  });

  it('should delete an agent', async () => {
    const response = await deleteAgent(agentList[0].id);
    assert(response.status === 200);
    agentList = agentList.filter(agent => agent.id !== agentList[0].id);
  });
});

describe('Game Tests', () => {
  it('should create a new game', async () => {
    const game = { name: 'Test Game', genre: 'Test Genre' };
    const response = await createGame(game);
    assert(response.status === 200);
    assert(response.data.name === game.name);
    assert(response.data.genre === game.genre);
    gameList.push(response.data);
  });

  it('should get a game', async () => {
    const response = await getGame(gameList[0].id);
    assert(response.status === 200);
    assert(response.data.name === gameList[0].name);
    assert(response.data.genre === gameList[0].genre);
  });

  it('should update a game', async () => {
    const updatedGame = { name: 'Updated Game', genre: 'Updated Genre' };
    const response = await updateGame(gameList[0].id, updatedGame);
    assert(response.status === 200);
    assert(response.data.name === updatedGame.name);
    assert(response.data.genre === updatedGame.genre);
  });

  it('should delete a game', async () => {
    const response = await deleteGame(gameList[0].id);
    assert(response.status === 200);
    gameList = gameList.filter(game => game.id !== gameList[0].id);
  });
});
```