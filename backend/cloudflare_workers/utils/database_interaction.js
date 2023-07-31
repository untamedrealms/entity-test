```javascript
const KV_NAMESPACE = WORKERS_KV;

// AgentSchema and GameSchema are defined in shared dependencies
const AgentSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    game: { type: "string" },
    status: { type: "string" },
  },
  required: ["id", "name", "game", "status"],
};

const GameSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" },
    genre: { type: "string" },
  },
  required: ["id", "name", "genre"],
};

async function createAgent(agent) {
  const id = agent.id;
  await KV_NAMESPACE.put(`agent-${id}`, JSON.stringify(agent));
  return agent;
}

async function getAgent(id) {
  const agent = await KV_NAMESPACE.get(`agent-${id}`);
  return agent ? JSON.parse(agent) : null;
}

async function updateAgent(id, updates) {
  const agent = await getAgent(id);
  if (!agent) throw new Error("Agent not found");
  const updatedAgent = { ...agent, ...updates };
  await KV_NAMESPACE.put(`agent-${id}`, JSON.stringify(updatedAgent));
  return updatedAgent;
}

async function deleteAgent(id) {
  await KV_NAMESPACE.delete(`agent-${id}`);
}

async function createGame(game) {
  const id = game.id;
  await KV_NAMESPACE.put(`game-${id}`, JSON.stringify(game));
  return game;
}

async function getGame(id) {
  const game = await KV_NAMESPACE.get(`game-${id}`);
  return game ? JSON.parse(game) : null;
}

async function updateGame(id, updates) {
  const game = await getGame(id);
  if (!game) throw new Error("Game not found");
  const updatedGame = { ...game, ...updates };
  await KV_NAMESPACE.put(`game-${id}`, JSON.stringify(updatedGame));
  return updatedGame;
}

async function deleteGame(id) {
  await KV_NAMESPACE.delete(`game-${id}`);
}

module.exports = {
  createAgent,
  getAgent,
  updateAgent,
  deleteAgent,
  createGame,
  getGame,
  updateGame,
  deleteGame,
};
```