```rust
use std::sync::Arc;
use crate::sdk::common::models::{AgentSchema, GameSchema};

pub struct UnrealEngineSpecificCode {
    agent_list: Arc<Vec<AgentSchema>>,
    game_list: Arc<Vec<GameSchema>>,
}

impl UnrealEngineSpecificCode {
    pub fn new(agent_list: Arc<Vec<AgentSchema>>, game_list: Arc<Vec<GameSchema>>) -> Self {
        Self { agent_list, game_list }
    }

    pub fn create_agent(&mut self, agent: AgentSchema) {
        self.agent_list.push(agent);
        println!("AgentCreated");
    }

    pub fn create_game(&mut self, game: GameSchema) {
        self.game_list.push(game);
        println!("GameCreated");
    }

    pub fn get_agent(&self, agent_id: &str) -> Option<&AgentSchema> {
        self.agent_list.iter().find(|agent| agent.id == agent_id)
    }

    pub fn get_game(&self, game_id: &str) -> Option<&GameSchema> {
        self.game_list.iter().find(|game| game.id == game_id)
    }

    pub fn update_agent(&mut self, agent_id: &str, updated_agent: AgentSchema) {
        let index = self.agent_list.iter().position(|agent| agent.id == agent_id);
        if let Some(index) = index {
            self.agent_list[index] = updated_agent;
        }
    }

    pub fn update_game(&mut self, game_id: &str, updated_game: GameSchema) {
        let index = self.game_list.iter().position(|game| game.id == game_id);
        if let Some(index) = index {
            self.game_list[index] = updated_game;
        }
    }

    pub fn delete_agent(&mut self, agent_id: &str) {
        self.agent_list.retain(|agent| agent.id != agent_id);
    }

    pub fn delete_game(&mut self, game_id: &str) {
        self.game_list.retain(|game| game.id != game_id);
    }
}
```