import { writable } from 'svelte/store';
import { AgentSchema, GameSchema } from './types/definitions';

export const agentList = writable<AgentSchema[]>([]);
export const gameList = writable<GameSchema[]>([]);

export async function createAgent(agent: AgentSchema) {
    const response = await fetch('/api/agents', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(agent)
    });

    if (response.ok) {
        const newAgent = await response.json();
        agentList.update(agents => [...agents, newAgent]);
    } else {
        throw new Error('Failed to create agent');
    }
}

export async function createGame(game: GameSchema) {
    const response = await fetch('/api/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });

    if (response.ok) {
        const newGame = await response.json();
        gameList.update(games => [...games, newGame]);
    } else {
        throw new Error('Failed to create game');
    }
}

export async function getAgent(id: string) {
    const response = await fetch(`/api/agents/${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch agent');
    }
}

export async function getGame(id: string) {
    const response = await fetch(`/api/games/${id}`);
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch game');
    }
}

export async function updateAgent(agent: AgentSchema) {
    const response = await fetch(`/api/agents/${agent.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(agent)
    });

    if (response.ok) {
        agentList.update(agents => agents.map(a => a.id === agent.id ? agent : a));
    } else {
        throw new Error('Failed to update agent');
    }
}

export async function updateGame(game: GameSchema) {
    const response = await fetch(`/api/games/${game.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });

    if (response.ok) {
        gameList.update(games => games.map(g => g.id === game.id ? game : g));
    } else {
        throw new Error('Failed to update game');
    }
}

export async function deleteAgent(id: string) {
    const response = await fetch(`/api/agents/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        agentList.update(agents => agents.filter(a => a.id !== id));
    } else {
        throw new Error('Failed to delete agent');
    }
}

export async function deleteGame(id: string) {
    const response = await fetch(`/api/games/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        gameList.update(games => games.filter(g => g.id !== id));
    } else {
        throw new Error('Failed to delete game');
    }
}