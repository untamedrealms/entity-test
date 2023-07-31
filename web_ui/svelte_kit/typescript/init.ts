```typescript
import { AgentSchema, GameSchema } from './types/definitions';
import { createAgent, createGame, getAgent, getGame, updateAgent, updateGame, deleteAgent, deleteGame } from './api/backend_interaction';
import { agentList, gameList } from './components/agent_listing';

// Initialize SvelteKit with TypeScript
const init = () => {
    // Initialize agent and game lists
    agentList = [];
    gameList = [];

    // Fetch initial data
    fetchInitialData();
};

// Fetch initial data from the backend
const fetchInitialData = async () => {
    try {
        // Fetch agents
        const agents = await getAgent();
        agentList = agents.map((agent: AgentSchema) => agent);

        // Fetch games
        const games = await getGame();
        gameList = games.map((game: GameSchema) => game);
    } catch (error) {
        console.error('Failed to fetch initial data:', error);
    }
};

init();
```