```rust
use std::sync::Arc;
use crate::sdk::common::models::{AgentSchema, GameSchema};
use crate::sdk::unity::wrappers::UnityWrapper;

pub struct UnitySpecificCode {
    unity_wrapper: Arc<UnityWrapper>,
}

impl UnitySpecificCode {
    pub fn new(unity_wrapper: Arc<UnityWrapper>) -> Self {
        Self { unity_wrapper }
    }

    pub fn create_agent(&self, agent_schema: &AgentSchema) {
        self.unity_wrapper.create_agent(agent_schema);
    }

    pub fn create_game(&self, game_schema: &GameSchema) {
        self.unity_wrapper.create_game(game_schema);
    }

    pub fn get_agent(&self, agent_id: &str) -> Option<AgentSchema> {
        self.unity_wrapper.get_agent(agent_id)
    }

    pub fn get_game(&self, game_id: &str) -> Option<GameSchema> {
        self.unity_wrapper.get_game(game_id)
    }

    pub fn update_agent(&self, agent_id: &str, agent_schema: &AgentSchema) {
        self.unity_wrapper.update_agent(agent_id, agent_schema);
    }

    pub fn update_game(&self, game_id: &str, game_schema: &GameSchema) {
        self.unity_wrapper.update_game(game_id, game_schema);
    }

    pub fn delete_agent(&self, agent_id: &str) {
        self.unity_wrapper.delete_agent(agent_id);
    }

    pub fn delete_game(&self, game_id: &str) {
        self.unity_wrapper.delete_game(game_id);
    }
}
```