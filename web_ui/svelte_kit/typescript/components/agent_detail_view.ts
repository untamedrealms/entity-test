```typescript
import { onMount } from 'svelte';
import { getAgent } from '../api/backend_interaction';

let agentDetail = null;
let agentId = null; // This should be passed as a prop to this component

onMount(async () => {
  try {
    agentDetail = await getAgent(agentId);
  } catch (error) {
    console.error('Failed to fetch agent details:', error);
  }
});

export default {
  data() {
    return {
      agentDetail,
    };
  },
};
```