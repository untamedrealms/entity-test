```javascript
// Define the structure of an AI agent
class AgentSchema {
    constructor(id, name, game, status, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.game = game;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

// Define the structure of a game
class GameSchema {
    constructor(id, name, genre, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

module.exports = { AgentSchema, GameSchema };
```