const { AgentSchema } = require('./utils/database_interaction.js');
const { agentList } = require('./project_setup.js');

async function createAgent(request) {
    const data = await request.json();
    const agent = new AgentSchema(data);
    agentList.push(agent);
    return new Response('AgentCreated', { status: 201 });
}

async function getAgent(request) {
    const id = request.url.split('/').pop();
    const agent = agentList.find(agent => agent.id === id);
    if (agent) {
        return new Response(JSON.stringify(agent), { status: 200 });
    } else {
        return new Response('Agent not found', { status: 404 });
    }
}

async function updateAgent(request) {
    const id = request.url.split('/').pop();
    const data = await request.json();
    const agentIndex = agentList.findIndex(agent => agent.id === id);
    if (agentIndex !== -1) {
        agentList[agentIndex] = { ...agentList[agentIndex], ...data };
        return new Response('Agent updated', { status: 200 });
    } else {
        return new Response('Agent not found', { status: 404 });
    }
}

async function deleteAgent(request) {
    const id = request.url.split('/').pop();
    const agentIndex = agentList.findIndex(agent => agent.id === id);
    if (agentIndex !== -1) {
        agentList.splice(agentIndex, 1);
        return new Response('Agent deleted', { status: 200 });
    } else {
        return new Response('Agent not found', { status: 404 });
    }
}

module.exports = { createAgent, getAgent, updateAgent, deleteAgent };