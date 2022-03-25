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
npm start
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

## Studio Flow JSON Examples

Any JSON should be included within the "Message & Chat Config" for a given widget under the "Message Attributes" input. The below examples are taken from the Studio Flow included in provision.js

### Buttons

#### Interface

```
{
    interactiveWebchatOptions: {
        type: 'buttons',
        options: {'uuid': string, 'value': string, 'content': string}[]
    }
}
```

#### Example

```
{
    "interactiveWebchatOptions": {
        "type": "buttons",
        "options": [
            {
                "uuid": "78d7ffc3-bdb5-40dd-a455-3ef352fab140",
                "content": "I want to place an order 🥝",
                "value": "I want to place an order"
            },
            {
                "uuid": "e11ef994-4a61-4a0c-aa5f-0ae4d93b91cf",
                "content": "I want to cancel my susbcription 😥",
                "value": "I want to cancel my subscription"
            }
        ]
    }
}
```

### Dropdown

#### Interface

```
{
    interactiveWebchatOptions: {
        type: 'dropdown',
        options: {'uuid': string, 'value': string, 'content': string}[],
        dropdownLabel: string
    }
}
```

#### Example

```
{
    "interactiveWebchatOptions": {
        "type": "dropdown",
        "options": [
            {
                "uuid": "ccfbe80d-891e-4424-9a41-897ffdbb3932",
                "content": "Berry Bonanza 🫐",
                "value": "Berry Bonanza"
            },
            {
                "uuid": "d2de75d0-5006-4c9a-8ce9-956d14a149e2",
                "content": "Seasonal Stapes ☀️",
                "value": "Seasonal Staples"
            }
        ]
    }
}
```

### Calendar

#### Interface

```
{
    interactiveWebchatOptions: {
        type: 'calendar',
        timezone: string ("TZ database name" as per: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
    }
}
```

#### Example

```
{
    "interactiveWebchatOptions": {
        "type": "calendar",
        "timezone": "Europe/Belfast"
    }
}
```
