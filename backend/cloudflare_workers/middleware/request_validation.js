```javascript
const { AgentSchema, GameSchema } = require('../utils/database_interaction');

const validateRequest = async (request, schema) => {
  const body = await request.json();
  const validationErrors = schema.validate(body);

  if (validationErrors.length > 0) {
    throw new Error(`Invalid request body: ${validationErrors.join(', ')}`);
  }
};

const validateAgentRequest = (request) => validateRequest(request, AgentSchema);
const validateGameRequest = (request) => validateRequest(request, GameSchema);

module.exports = {
  validateAgentRequest,
  validateGameRequest,
};
```