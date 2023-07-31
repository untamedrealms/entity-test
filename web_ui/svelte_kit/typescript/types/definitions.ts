```typescript
export interface AgentSchema {
  id: string;
  name: string;
  game: string;
  skills: string[];
  status: 'active' | 'inactive';
}

export interface GameSchema {
  id: string;
  name: string;
  genre: string;
  platforms: string[];
}

export interface Message {
  type: 'AgentCreated' | 'GameCreated';
  payload: AgentSchema | GameSchema;
}
```