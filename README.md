<a  href="https://www.twilio.com">
<img  src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg"  alt="Twilio"  width="250"  />
</a>

# Flex Web Chat with Selectable Chat Messages

This project was bootstrapped with [Flex Webchat UI Sample](https://github.com/twilio/flex-webchat-ui-sample)

This package can only be consumed together with Twilio Flex. Visit http://twilio.com/flex to find out more.

This way this works is we push chat channel attributes via a studio flow > function, that we subscribe to from the web.  Any time the attributes change, we pull the "clickablemessage" object and push this into a redux store.  When then render the buttons based on what is contained within the object.  As the customer progresses through the studio flow, we push the next set of scripted answers as clickable buttons on their end.  Thus providing a scripted/guided experience through Studio flow.

This is a great use case for automating specific tasks that could easily be solved in a self-service fashion vs talking to an agent.  Give it a try!

Selectable Chat Messages in Action  
![Plugin Demo](https://github.com/aestellwag/flex-selectable-chat-messages/blob/main/selectable-chat-messages.gif)

## Pre-req

To deploy this plugin, you will need:

- An active Twilio account with Flex provisioned. Refer to the [Flex Quickstart](https://www.twilio.com/docs/flex/quickstart/flex-basics#sign-up-for-or-sign-in-to-twilio-and-create-a-new-flex-project") to create one.
- npm version 5.0.0 or later installed (type `npm -v` in your terminal to check)
- Node.js version 10.12.0 or later installed (type `node -v` in your terminal to check)
- [Twilio CLI](https://www.twilio.com/docs/twilio-cli/quickstart#install-twilio-cli) along with the [Flex CLI Plugin](https://www.twilio.com/docs/twilio-cli/plugins#available-plugins) and the [Serverless Plugin](https://www.twilio.com/docs/twilio-cli/plugins#available-plugins). Run the following commands to install them:
  ```
  # Install the Twilio CLI
  npm install twilio-cli -g
  # Install the Serverless and Flex as Plugins
  twilio plugins:install @twilio-labs/plugin-serverless
  twilio plugins:install @twilio-labs/plugin-flex@beta
  ```
- A GitHub account

### Twilio Account Settings

Before we begin, we need to collect
all the config values we need to run this Flex plugin:

| Config&nbsp;Value | Description                                                                                                                                            |
| :---------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Account&nbsp;Sid  | Your primary Twilio account identifier - find this [in the Console](https://www.twilio.com/console).                                                   |
| Auth Token        | Used to create an API key for future CLI access to your Twilio Account - find this [in the Console](https://www.twilio.com/console).                   |
| Workspace SID     | Your Flex Task Assignment workspace SID - find this [in the Console TaskRouter Workspaces page](https://www.twilio.com/console/taskrouter/workspaces). |
| Flex Flow SID     | Your Flow SID - find this [in the Console Messaging page](https://www.twilio.com/console/flex/messaging). |

## Setup

Make sure you have [Node.js](https://nodejs.org) as well as [`npm`](https://npmjs.com) installed.

Navigate to the primary plugin folder and run NPM install for the plugin
```bash
cd chat-clickable-messages
npm install
```

Navigate to the serverless folder, create and modify the .env file
```bash
cd ..
cd serverless
***rename the .env.example file to .env and change the below:
ACCOUNT_SID= Found at https://www.twilio.com/console
AUTH_TOKEN= Found at https://www.twilio.com/console 
TWILIO_WORKSPACE_SID = WSXXXXXXXXXXXXXXXXXX
```

Run NPM install for the serverless functions
```bash
Run: (from the serverless directory)
npm install
```

Install the twilio serverless functions
```bash
Run: 
twilio plugins:install @twilio-labs/plugin-serverless
```

Deploy the serverless functions into Twilio
*Do this if you haven't deployed the serverless functions already*
```bash
Run: 
twilio serverless:deploy
```
Copy the domain as you'll need this for the .env as you'll use this when you import the studio flow

Import the Studio Flow located within /serverless/studio_flow, you'll find below how to import a json within the console:
https://www.twilio.com/console/studio/dashboard


![Plugin Demo](https://github.com/aestellwag/flex-selectable-chat-messages/blob/main/studio-flow-import-viaJSON.gif)

From here you'll need to update the function widget within the Studio Flow to point to your function

From the public folder, create the appConfig.js and change on variable within it
```bash
cd public
cd assets
rename webchat-appConfig.example.js to webchat-appConfig.js

change accountSID: "ACXXXXXXXXXXXXX"
and flexFlowSID: "FOXXXXXXXXXXXXXX"
```



## Development

In order to develop locally, you can use the Webpack Dev Server by running (from the root plugin directory):

```bash
npm start
```

This will automatically start up the Webpack Dev Server and open the browser for you. Your app will run on `http://localhost:3000`. If you want to change that you can do this by setting the `PORT` environment variable:

When you make changes to your code, the browser window will be automatically refreshed.

## Deploy

When you are ready to deploy your web chat widget, you'll need to run build
```
Run: 
npm run-script build
```


---

## Changelog

### 1.0.0

**July 23, 2021**

- Initial Release


## Disclaimer
This software is to be considered "sample code", a Type B Deliverable, and is delivered "as-is" to the user. Twilio bears no responsibility to support the use or implementation of this software.