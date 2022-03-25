# How to add Interactive Elements into Twilio Flex Webchat

This repo contains a proof of concept app for building interactive elements (buttons, dropdowns, calendars) into Twilio Flex Webchat. This app builds on the "Twilio Flex Web Chat Sample UI" available at https://github.com/twilio/flex-webchat-ui-sample.

![alt text](https://flex-interactive-webchat-assets-6896.twil.io/flex-interactives-ss.png)

## Provision

1. Install dependencies

```
npm install
```

2. Run the provision script

```
node provision.js
```

The provision script will request:

- A Twilio Account SID (make sure this relates to an account containing your Flex project)
- A Twilio Auth Token

The provision script will:

- Create a Studio Flow with three messages, that contain the necessary attributes to generate i) a button set, ii) a dropdown, and iii) calendar before forawrding the query onto Flex
- Updates the default web Flex Flow with the newly created Studio Flow
- Prints the SID of the web Flex Flow which you will need to start the application as detailed below

## Start Application

1. Navigate to the application file

```
cd flex-webchat-interactive
```

2. Install dependencies

```
npm install
```

3. Create a webchat-appConfig.js file using the webchat-appConfig-example.js file under public > assets:

- Update the accountSid within the appConfig variable
- Update the flexFlowSid within the appConfig variable

4. Run the application

```
npm start
```
