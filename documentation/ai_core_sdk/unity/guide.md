# AI-Agent Core SDK for Unity

## Introduction

Welcome to the AI-Agent Core SDK for Unity. This guide will walk you through the setup and usage of the SDK in your Unity projects.

## Setup

1. Download the SDK from the provided link.
2. Import the SDK into your Unity project. Navigate to `Assets -> Import Package -> Custom Package` and select the downloaded SDK.

## Usage

### Wrappers

The SDK provides wrappers for Unity-specific functionality. You can find these in the `wrappers.rs` file. 

```rust
use ai_agent_core::sdk::unity::wrappers;
```

### Specific Code

The `specific_code.rs` file contains Unity-specific implementations. 

```rust
use ai_agent_core::sdk::unity::specific_code;
```

### Example Project

An example project is provided in the `example_project.rs` file. This project demonstrates how to use the SDK in a Unity project.

### Models and Reflection

Common logic like models and reflection mechanisms are located in the `models.rs` and `reflection.rs` files in the `common` directory.

```rust
use ai_agent_core::sdk::common::models;
use ai_agent_core::sdk::common::reflection;
```

## Testing

Unit and integration tests are included in the `tests.rs` file. Run these tests to ensure the SDK is working correctly in your environment.

## Troubleshooting

If you encounter any issues while using the SDK, please refer to the `troubleshooting.md` file in the `documentation` directory.

## Conclusion

That's it! You're now ready to start using the AI-Agent Core SDK in your Unity projects. Happy coding!