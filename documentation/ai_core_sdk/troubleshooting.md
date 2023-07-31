# AI-Agent Core SDK Troubleshooting

## Common Issues

### Issue: SDK Initialization Failure

If you encounter an issue where the SDK fails to initialize, please check the following:

1. Ensure that the game engine (Unity, Unreal Engine, or Godot) is correctly installed and updated to the latest version.
2. Verify that the SDK is correctly installed and the game engine is pointing to the correct SDK path.

### Issue: Agent Creation Failure

If you're having trouble creating an AI agent, please check the following:

1. Ensure that the `createAgent` function is correctly implemented and receiving the correct parameters based on the `AgentSchema`.
2. Check that the `agentList` is correctly updated after the creation of a new agent.

### Issue: Game Creation Failure

If you're having trouble creating a game, please check the following:

1. Ensure that the `createGame` function is correctly implemented and receiving the correct parameters based on the `GameSchema`.
2. Check that the `gameList` is correctly updated after the creation of a new game.

## Advanced Issues

### Issue: SDK-Backend Communication Failure

If the SDK is unable to communicate with the backend, please check the following:

1. Verify that the backend service is up and running.
2. Check that the SDK is correctly configured to communicate with the backend, including correct API endpoints and authentication mechanisms.

### Issue: SDK Performance Issues

If the SDK is performing poorly or causing the game to lag, please check the following:

1. Ensure that the game engine is correctly optimized for the AI agents.
2. Check that the AI agents are not causing excessive load on the game engine, such as by running unnecessary computations or making excessive API calls.

If you're still having trouble after following these troubleshooting steps, please refer to the API reference and the specific guides for Unity, Unreal Engine, and Godot. If all else fails, don't hesitate to reach out to our support team.