```typescript
import { onMount } from 'svelte';
import { getAgent } from '../api/backend_interaction';

let agent = {};

onMount(async () => {
    const params = new URLSearchParams(window.location.search);
    const agentId = params.get('id');
    if (agentId) {
        agent = await getAgent(agentId);
    }
});

</script>

<main id="agent-view">
    {#if agent}
        <h1>{agent.name}</h1>
        <p>{agent.description}</p>
        <h2>Games</h2>
        <ul>
            {#each agent.games as game}
                <li>{game.name}</li>
            {/each}
        </ul>
    {:else}
        <p>Loading...</p>
    {/if}
</main>
```