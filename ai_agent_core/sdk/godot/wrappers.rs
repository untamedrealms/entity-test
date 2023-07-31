```rust
use gdnative::prelude::*;

// Wrapper for AI Agent
pub struct AIAgent {
    agent_id: String,
    agent_data: Variant,
}

impl NativeClass for AIAgent {
    type Base = Node;
    type UserData = MutexData<RwLock<AIAgent>, AIAgent>;

    fn class_name() -> &'static str {
        "AIAgent"
    }

    fn init(owner: Self::Base) -> Self {
        AIAgent {
            agent_id: "".to_string(),
            agent_data: Variant::new(),
        }
    }

    fn register_properties(builder: &ClassBuilder<Self>) {
        builder.add_property("agent_id")
            .with_default("".to_string())
            .with_getter(|this: &AIAgent, _| this.agent_id.clone())
            .with_setter(|this: &mut AIAgent, _, value| this.agent_id = value)
            .done();

        builder.add_property("agent_data")
            .with_default(Variant::new())
            .with_getter(|this: &AIAgent, _| this.agent_data.clone())
            .with_setter(|this: &mut AIAgent, _, value| this.agent_data = value)
            .done();
    }
}

// Wrapper for Game
pub struct Game {
    game_id: String,
    game_data: Variant,
}

impl NativeClass for Game {
    type Base = Node;
    type UserData = MutexData<RwLock<Game>, Game>;

    fn class_name() -> &'static str {
        "Game"
    }

    fn init(owner: Self::Base) -> Self {
        Game {
            game_id: "".to_string(),
            game_data: Variant::new(),
        }
    }

    fn register_properties(builder: &ClassBuilder<Self>) {
        builder.add_property("game_id")
            .with_default("".to_string())
            .with_getter(|this: &Game, _| this.game_id.clone())
            .with_setter(|this: &mut Game, _, value| this.game_id = value)
            .done();

        builder.add_property("game_data")
            .with_default(Variant::new())
            .with_getter(|this: &Game, _| this.game_data.clone())
            .with_setter(|this: &mut Game, _, value| this.game_data = value)
            .done();
    }
}

fn init(handle: InitHandle) {
    handle.add_class::<AIAgent>();
    handle.add_class::<Game>();
}

godot_init!(init);
```