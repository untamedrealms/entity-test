```rust
use serde::{Serialize, Deserialize};

// AgentSchema defines the structure of an AI agent
#[derive(Serialize, Deserialize, Debug)]
pub struct AgentSchema {
    pub id: String,
    pub name: String,
    pub game: String,
    pub status: String,
    pub created_at: String,
    pub updated_at: String,
}

// GameSchema defines the structure of a game
#[derive(Serialize, Deserialize, Debug)]
pub struct GameSchema {
    pub id: String,
    pub name: String,
    pub genre: String,
    pub created_at: String,
    pub updated_at: String,
}
```