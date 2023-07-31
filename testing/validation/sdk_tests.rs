```rust
#[cfg(test)]
mod tests {
    use super::*;
    use ai_agent_core::sdk::{unity, unreal_engine, godot};

    #[test]
    fn test_unity_wrapper() {
        let unity_wrapper = unity::Wrapper::new();
        assert!(unity_wrapper.is_valid());
    }

    #[test]
    fn test_unreal_engine_wrapper() {
        let unreal_wrapper = unreal_engine::Wrapper::new();
        assert!(unreal_wrapper.is_valid());
    }

    #[test]
    fn test_godot_wrapper() {
        let godot_wrapper = godot::Wrapper::new();
        assert!(godot_wrapper.is_valid());
    }

    #[test]
    fn test_create_agent() {
        let agent = createAgent("Test Agent");
        assert_eq!(agent.name, "Test Agent");
    }

    #[test]
    fn test_update_agent() {
        let mut agent = createAgent("Test Agent");
        updateAgent(&mut agent, "Updated Agent");
        assert_eq!(agent.name, "Updated Agent");
    }

    #[test]
    fn test_delete_agent() {
        let mut agent_list = vec![createAgent("Test Agent")];
        deleteAgent(&mut agent_list, "Test Agent");
        assert!(agent_list.is_empty());
    }

    #[test]
    fn test_create_game() {
        let game = createGame("Test Game");
        assert_eq!(game.name, "Test Game");
    }

    #[test]
    fn test_update_game() {
        let mut game = createGame("Test Game");
        updateGame(&mut game, "Updated Game");
        assert_eq!(game.name, "Updated Game");
    }

    #[test]
    fn test_delete_game() {
        let mut game_list = vec![createGame("Test Game")];
        deleteGame(&mut game_list, "Test Game");
        assert!(game_list.is_empty());
    }
}
```