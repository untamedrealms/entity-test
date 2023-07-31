# AI-Agent Core SDK for Unreal Engine

This guide will walk you through the process of integrating our AI-Agent Core SDK into your Unreal Engine project.

## Getting Started

First, ensure that you have the latest version of the Unreal Engine installed. You can download it from the [Unreal Engine website](https://www.unrealengine.com/).

Next, download the AI-Agent Core SDK from our repository and extract it to a location of your choice.

## Integration

To integrate the SDK into your Unreal Engine project, follow these steps:

1. Open your Unreal Engine project.
2. Navigate to the `Plugins` directory in your project's root directory. If it doesn't exist, create it.
3. Copy the `ai_agent_core` directory from the SDK into the `Plugins` directory of your project.
4. Restart your Unreal Engine project. The SDK should now be listed in the `Plugins` section of the project settings.

## Usage

To use the SDK in your game, you need to include the appropriate headers in your source files:

```cpp
#include "ai_agent_core/Agent.h"
#include "ai_agent_core/Game.h"
```

You can then use the `Agent` and `Game` classes to interact with the AI agents and games:

```cpp
// Create a new agent
ai_agent_core::Agent agent;

// Set the agent's properties
agent.setName("Agent 1");
agent.setSpeed(100);

// Create a new game
ai_agent_core::Game game;

// Add the agent to the game
game.addAgent(agent);
```

## Troubleshooting

If you encounter any issues while using the SDK, please refer to the [troubleshooting guide](../troubleshooting.md).

## Further Reading

For more detailed information about the SDK's API, please refer to the [API reference](../api_reference.md).