```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_create_agent() {
        let agent = createAgent("TestAgent", "UnrealEngine");
        assert_eq!(agent.name, "TestAgent");
        assert_eq!(agent.engine, "UnrealEngine");
    }

    #[test]
    fn test_update_agent() {
        let mut agent = createAgent("TestAgent", "UnrealEngine");
        updateAgent(&mut agent, "UpdatedAgent", "UnrealEngine");
        assert_eq!(agent.name, "UpdatedAgent");
    }

    #[test]
    fn test_delete_agent() {
        let mut agent_list = vec![createAgent("TestAgent", "UnrealEngine")];
        deleteAgent(&mut agent_list, "TestAgent");
        assert!(agent_list.is_empty());
    }

    #[test]
    fn test_create_game() {
        let game = createGame("TestGame", "UnrealEngine");
        assert_eq!(game.name, "TestGame");
        assert_eq!(game.engine, "UnrealEngine");
    }

    #[test]
    fn test_update_game() {
        let mut game = createGame("TestGame", "UnrealEngine");
        updateGame(&mut game, "UpdatedGame", "UnrealEngine");
        assert_eq!(game.name, "UpdatedGame");
    }

    #[test]
    fn test_delete_game() {
        let mut game_list = vec![createGame("TestGame", "UnrealEngine")];
        deleteGame(&mut game_list, "TestGame");
        assert!(game_list.is_empty());
    }
}
```