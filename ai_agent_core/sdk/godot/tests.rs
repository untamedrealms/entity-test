```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_create_agent() {
        let agent = createAgent("TestAgent", "Godot");
        assert_eq!(agent.name, "TestAgent");
        assert_eq!(agent.engine, "Godot");
    }

    #[test]
    fn test_get_agent() {
        let agent = createAgent("TestAgent", "Godot");
        let retrieved_agent = getAgent(agent.id);
        assert_eq!(retrieved_agent, agent);
    }

    #[test]
    fn test_update_agent() {
        let mut agent = createAgent("TestAgent", "Godot");
        agent = updateAgent(agent.id, "UpdatedAgent", "Godot");
        assert_eq!(agent.name, "UpdatedAgent");
    }

    #[test]
    fn test_delete_agent() {
        let agent = createAgent("TestAgent", "Godot");
        deleteAgent(agent.id);
        let retrieved_agent = getAgent(agent.id);
        assert!(retrieved_agent.is_none());
    }

    #[test]
    fn test_create_game() {
        let game = createGame("TestGame");
        assert_eq!(game.name, "TestGame");
    }

    #[test]
    fn test_get_game() {
        let game = createGame("TestGame");
        let retrieved_game = getGame(game.id);
        assert_eq!(retrieved_game, game);
    }

    #[test]
    fn test_update_game() {
        let mut game = createGame("TestGame");
        game = updateGame(game.id, "UpdatedGame");
        assert_eq!(game.name, "UpdatedGame");
    }

    #[test]
    fn test_delete_game() {
        let game = createGame("TestGame");
        deleteGame(game.id);
        let retrieved_game = getGame(game.id);
        assert!(retrieved_game.is_none());
    }
}
```