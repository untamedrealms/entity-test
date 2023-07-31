const { getGame, createGame, updateGame, deleteGame } = require('./utils/database_interaction');
const { GameSchema } = require('./models/game');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { url, method } = request;
  const urlParts = url.split('/').filter(Boolean);
  const gameId = urlParts[2];

  switch (method) {
    case 'GET':
      if (gameId) {
        return getGame(gameId);
      } else {
        return new Response('Game ID is required', { status: 400 });
      }
    case 'POST':
      const gameData = await request.json();
      const validation = GameSchema.validate(gameData);
      if (validation.error) {
        return new Response(validation.error.details[0].message, { status: 400 });
      }
      return createGame(gameData);
    case 'PUT':
      if (gameId) {
        const gameData = await request.json();
        const validation = GameSchema.validate(gameData);
        if (validation.error) {
          return new Response(validation.error.details[0].message, { status: 400 });
        }
        return updateGame(gameId, gameData);
      } else {
        return new Response('Game ID is required', { status: 400 });
      }
    case 'DELETE':
      if (gameId) {
        return deleteGame(gameId);
      } else {
        return new Response('Game ID is required', { status: 400 });
      }
    default:
      return new Response('Invalid request method', { status: 405 });
  }
}