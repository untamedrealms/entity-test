const cloudflareWorkers = require('@cloudflare/workers-toolkit');

// Initialize Cloudflare Workers project
cloudflareWorkers.init({
  name: 'ai-agents-backend',
  type: 'javascript',
  site: {
    account: 'your-account-id',
    zone: 'your-zone-id',
  },
});

// Import handlers
const agentsHandler = require('./agents_handler');
const gamesHandler = require('./games_handler');

// Import middleware
const authentication = require('./middleware/authentication');
const requestValidation = require('./middleware/request_validation');

// Import utility functions
const databaseInteraction = require('./utils/database_interaction');

// Set up routes
cloudflareWorkers.router
  .get('/agents', agentsHandler.get, [authentication, requestValidation])
  .post('/agents', agentsHandler.post, [authentication, requestValidation])
  .get('/games', gamesHandler.get, [authentication, requestValidation])
  .post('/games', gamesHandler.post, [authentication, requestValidation]);

// Start the server
cloudflareWorkers.listen(8080);