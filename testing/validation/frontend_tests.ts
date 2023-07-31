```typescript
import { render, fireEvent } from '@testing-library/svelte';
import AgentListing from '../web_ui/svelte_kit/typescript/components/agent_listing.ts';
import AgentDetailView from '../web_ui/svelte_kit/typescript/components/agent_detail_view.ts';
import Dashboard from '../web_ui/svelte_kit/typescript/pages/dashboard.ts';
import AgentViews from '../web_ui/svelte_kit/typescript/pages/agent_views.ts';
import { agentList, gameList } from '../shared_dependencies.ts';

describe('Frontend Tests', () => {
  test('AgentListing component renders correctly', () => {
    const { getByTestId } = render(AgentListing, { props: { agents: agentList } });
    expect(getByTestId('agent-list')).toBeInTheDocument();
  });

  test('AgentDetailView component renders correctly', () => {
    const { getByTestId } = render(AgentDetailView, { props: { agent: agentList[0] } });
    expect(getByTestId('agent-detail')).toBeInTheDocument();
  });

  test('Dashboard page renders correctly', () => {
    const { getByTestId } = render(Dashboard, { props: { agents: agentList, games: gameList } });
    expect(getByTestId('dashboard')).toBeInTheDocument();
  });

  test('AgentViews page renders correctly', () => {
    const { getByTestId } = render(AgentViews, { props: { agent: agentList[0] } });
    expect(getByTestId('agent-view')).toBeInTheDocument();
  });

  test('Agent creation event triggers correctly', async () => {
    const { getByTestId } = render(AgentListing, { props: { agents: agentList } });
    const addButton = getByTestId('add-agent-button');
    await fireEvent.click(addButton);
    expect(createAgent).toHaveBeenCalled();
  });

  test('Agent deletion event triggers correctly', async () => {
    const { getByTestId } = render(AgentDetailView, { props: { agent: agentList[0] } });
    const deleteButton = getByTestId('delete-agent-button');
    await fireEvent.click(deleteButton);
    expect(deleteAgent).toHaveBeenCalled();
  });
});
```