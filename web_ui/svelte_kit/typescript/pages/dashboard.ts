```typescript
import { onMount } from 'svelte';
import { agentList, gameList } from '../api/backend_interaction';

let agents = [];
let games = [];

onMount(async () => {
    agents = await agentList();
    games = await gameList();
});

</script>

<main id="dashboard">
    <h1>Dashboard</h1>
    <section>
        <h2>AI Agents</h2>
        <ul id="agent-list">
            {#each agents as agent}
                <li>{agent.name}</li>
            {/each}
        </ul>
    </section>
    <section>
        <h2>Games</h2>
        <ul id="game-list">
            {#each games as game}
                <li>{game.name}</li>
            {/each}
        </ul>
    </section>
</main>
```