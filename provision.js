// ================== Package Imports ==================
require('dotenv').config();
const Inquirer = require('inquirer');
const twilio = require('twilio');

// ================== Provision Script ==================
const runProvision = async () => {
  const userRes = await Inquirer.prompt([
    {
      type: 'string',
      name: 'twilioAccountSid',
      message: 'Twilio Account SID',
    },
    {
      type: 'password',
      name: 'twilioAuthToken',
      message: 'Twilio Auth Token',
    },
  ]);
  try {
    // Initialise Twilio Client
    const twilioClient = twilio(
      userRes.twilioAccountSid,
      userRes.twilioAuthToken
    );
    // Gather Defaults for Workspace, Workflow, Task Channel, Chat Service
    const workSpaces = await twilioClient.taskrouter.workspaces.list();
    // Update the "friendlyName" filter here to use a specific Workspace
    const defaultFlexWorkspaceSid = workSpaces.filter(
      (ws) => ws.friendlyName === 'Flex Task Assignment'
    )[0].sid;
    const workFlows = await twilioClient.taskrouter
      .workspaces(defaultFlexWorkspaceSid)
      .workflows.list();
    // Update the "friendlyName" filter here to use a specific Workflow
    const defaultFlexWorkflowSid = workFlows.filter(
      (wf) => wf.friendlyName === 'Assign to Anyone'
    )[0].sid;
    const taskChannels = await twilioClient.taskrouter
      .workspaces(defaultFlexWorkspaceSid)
      .taskChannels.list();
    // Update the "uniqueName" filter here to use a specific Task Channel
    const defaultChatTaskChannelSid = taskChannels.filter(
      (tc) => tc.uniqueName === 'chat'
    )[0].sid;
    // Get default flex flow for web
    const flexFlows = await twilioClient.flexApi.v1.flexFlow.list();
    const defaultWebFlexFlowSid = flexFlows.filter(
      (fF) => fF.channelType === 'web'
    )[0].sid;
    // Create Studio Flow
    const studioFlow = await twilioClient.studio.flows.create({
      commitMessage: 'First Commit',
      friendlyName: 'Interactive Webchat',
      status: 'draft',
      definition: {
        description: 'Webchat IVR for twilio-flex-interactive-webchat',
        states: [
          {
            name: 'Trigger',
            type: 'trigger',
            transitions: [
              {
                next: 'Greeting',
                event: 'incomingMessage',
              },
              {
                event: 'incomingCall',
              },
              {
                event: 'incomingConversationMessage',
              },
              {
                event: 'incomingRequest',
              },
              {
                event: 'incomingParent',
              },
            ],
            properties: {
              offset: {
                x: 0,
                y: -10,
              },
            },
          },
          {
            name: 'SendMessageToAgent',
            type: 'send-to-flex',
            transitions: [
              {
                event: 'callComplete',
              },
              {
                event: 'failedToEnqueue',
              },
              {
                event: 'callFailure',
              },
            ],
            properties: {
              offset: {
                x: -160,
                y: 750,
              },
              workflow: defaultFlexWorkflowSid,
              channel: defaultChatTaskChannelSid,
              attributes:
                '{"name": "{{trigger.message.ChannelAttributes.from}}", "channelType": "{{trigger.message.ChannelAttributes.channel_type}}", "channelSid": "{{trigger.message.ChannelSid}}"}',
            },
          },
          {
            name: 'Greeting',
            type: 'send-and-wait-for-reply',
            transitions: [
              {
                next: 'FruitOptions',
                event: 'incomingMessage',
              },
              {
                event: 'timeout',
              },
              {
                event: 'deliveryFailure',
              },
            ],
            properties: {
              offset: {
                x: 50,
                y: 200,
              },
              service: '{{trigger.message.InstanceSid}}',
              channel: '{{trigger.message.ChannelSid}}',
              from: 'Fresh Fruit Bot',
              attributes:
                '{\n "interactiveWebchatOptions": {\n "type": "buttons",\n "options": [{"uuid": "78d7ffc3-bdb5-40dd-a455-3ef352fab140", "content": "I want to place an order 🥝",  "value": "I want to place an order"},{"uuid": "e11ef994-4a61-4a0c-aa5f-0ae4d93b91cf", "content": "I want to cancel my susbcription 😥", "value": "I want to cancel my subscription"}, {"uuid": "34506dc-76f5-4286-a0c9-3f63388a38b1", "content": "Something else 🤔", "value": "Something else"}]\n  }\n  }',
              body: 'Please let us know how we can help:',
              timeout: '3600',
            },
          },
          {
            name: 'FruitOptions',
            type: 'send-and-wait-for-reply',
            transitions: [
              {
                next: 'DateOptions',
                event: 'incomingMessage',
              },
              {
                event: 'timeout',
              },
              {
                event: 'deliveryFailure',
              },
            ],
            properties: {
              offset: {
                x: -140,
                y: 440,
              },
              service: '{{trigger.message.InstanceSid}}',
              channel: '{{trigger.message.ChannelSid}}',
              from: 'Fresh Fruit Bot',
              attributes:
                '{\n "interactiveWebchatOptions": {\n "type": "dropdown",\n"dropdownLabel": "Seasonal boxes...",\n "options": [{"uuid": "ccfbe80d-891e-4424-9a41-897ffdbb3932", "content": "Berry Bonanza 🫐",  "value": "Berry Bonanza"},{"uuid": "d2de75d0-5006-4c9a-8ce9-956d14a149e2", "content": "Seasonal Stapes ☀️", "value": "Seasonal Staples"}, {"uuid": "c3601efc-17b1-4978-8c93-964475bcdad7", "content": "Organic Delights 🌿", "value": "Organic Delights"}]\n  }\n  }',
              body: 'Which box would you like to order?',
              timeout: '3600',
            },
          },
          {
            name: 'DateOptions',
            type: 'send-and-wait-for-reply',
            transitions: [
              {
                next: 'SendMessageToAgent',
                event: 'incomingMessage',
              },
              {
                event: 'timeout',
              },
              {
                event: 'deliveryFailure',
              },
            ],
            properties: {
              offset: {
                x: 170,
                y: 590,
              },
              service: '{{trigger.message.InstanceSid}}',
              channel: '{{trigger.message.ChannelSid}}',
              from: 'Fresh Fruit Bot',
              attributes:
                '{\n "interactiveWebchatOptions": {\n "type": "calendar",\n"timezone": "Europe/Belfast"\n  }\n  }',
              body: 'Which date would you like your box to be delivered?',
              timeout: '3600',
            },
          },
        ],
        initial_state: 'Trigger',
        flags: {
          allow_concurrent_calls: true,
        },
      },
    });
    const studioFlowSid = studioFlow.sid;
    // Update the chat Flex Flow to point at the new Studio Flow
    await twilioClient.flexApi.v1.flexFlow(defaultWebFlexFlowSid).update({
      integrationType: 'studio',
      integration: {
        flowSid: studioFlowSid,
      },
    });
    console.log(`Updated Flex Flow SID: ${defaultWebFlexFlowSid}`);
  } catch (e) {
    console.error(e);
  }
};
runProvision();
