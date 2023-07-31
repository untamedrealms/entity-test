```typescript
import { onMount } from 'svelte';
import { agentList } from '../api/backend_interaction';

let agents = [];

onMount(async () => {
    agents = await agentList();
});

export default {
    data() {
        return {
            agents
        }
    },
    methods: {
        async refreshAgents() {
            this.agents = await agentList();
        }
    }
}
```