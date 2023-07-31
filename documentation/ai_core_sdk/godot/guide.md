# AI-Agent Core SDK for Godot

This guide will walk you through the process of integrating our AI-Agent Core SDK into your Godot game project.

## Getting Started

First, ensure that you have the latest version of the SDK. You can download it from our official repository.

## Installation

1. Extract the SDK files into your Godot project directory.
2. In your Godot project, navigate to `Project > Project Settings > Plugins`.
3. Enable the `AI-Agent Core SDK` plugin.

## Usage

### Importing the SDK

At the top of your script, import the SDK:

```gdscript
var AI_Agent = preload("res://ai_agent_core/sdk/godot/ai_agent.gd")
```

### Creating an Agent

To create an agent, call the `createAgent` function and pass in the agent's details according to the `AgentSchema`:

```gdscript
var agent = AI_Agent.createAgent({
    "name": "Agent 1",
    "game": "Game 1",
    "skills": ["navigation", "combat"]
})
```

### Updating an Agent

To update an agent's details, call the `updateAgent` function:

```gdscript
AI_Agent.updateAgent(agent, {
    "skills": ["navigation", "combat", "stealth"]
})
```

### Deleting an Agent

To delete an agent, call the `deleteAgent` function:

```gdscript
AI_Agent.deleteAgent(agent)
```

## Troubleshooting

If you encounter any issues while using the SDK, please refer to the `troubleshooting.md` document in the `documentation/ai_core_sdk` directory.

## Conclusion

That's it! You've successfully integrated the AI-Agent Core SDK into your Godot project. Now you can start creating and managing AI agents in your game. Happy coding!