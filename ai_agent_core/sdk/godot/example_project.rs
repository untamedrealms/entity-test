```rust
use gdnative::prelude::*;

// Define the AI agent
#[derive(NativeClass)]
#[inherit(Node)]
pub struct AIAgent {
    #[property]
    agent_id: String,
    #[property]
    game_id: String,
}

// Implement the AI agent
#[methods]
impl AIAgent {
    fn new(_owner: &Node) -> Self {
        AIAgent {
            agent_id: String::new(),
            game_id: String::new(),
        }
    }

    #[export]
    fn _ready(&self, _owner: &Node) {
        godot_print!("AI agent is ready");
    }

    #[export]
    fn set_agent_id(&mut self, _owner: &Node, agent_id: String) {
        self.agent_id = agent_id;
    }

    #[export]
    fn get_agent_id(&self, _owner: &Node) -> String {
        self.agent_id.clone()
    }

    #[export]
    fn set_game_id(&mut self, _owner: &Node, game_id: String) {
        self.game_id = game_id;
    }

    #[export]
    fn get_game_id(&self, _owner: &Node) -> String {
        self.game_id.clone()
    }
}

// Register the AI agent with Godot
fn init(handle: InitHandle) {
    handle.add_class::<AIAgent>();
}

godot_init!(init);
```