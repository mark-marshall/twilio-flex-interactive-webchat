// Using the TokenValidator to authenticate so we can query the API
// We could do this directly from the plugin, but that requires us to provide
// the AccoundSID and AuthToken, which we do not want to have leak into the front end
// This the #1 why we are query this via a function vs directly in the plugin!

//const TokenValidator = require('twilio-flex-token-validator').functionValidator;

exports.handler = async (context, event, callback) => {
  
  // '*' allows being called from any origin, this not the best security
  // practice and should only be used for testing; when builiding
  // a production plugin you should set the allowed origin to
  // 'https://flex.twilio.com' (or any custom domain serving the plugin)

  const response = new Twilio.Response();
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'OPTIONS POST');
  response.appendHeader('Content-Type', 'application/json');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type'); 


  // Passing in the service SID, chat channel SID, and selectable chat message object that will be coming in from the studio flow
  const {
    serviceSID,
    chatChannelSID,
    selectableChatMessagesObject
  } = event;
  
  console.log(`Service SID = ${serviceSID}, chat channel SID = ${chatChannelSID} and messages = ${selectableChatMessagesObject}`);
  
  const client = context.getTwilioClient();

  // updating the chat channel with attributes that we will use within the web chat UI
  let chatAttributeUpdate;
  try {
    chatAttributeUpdate = await client.chat
      .services(serviceSID)
      .channels(chatChannelSID)
      .update({
        attributes:[selectableChatMessagesObject]
      })
  } catch (error){
    console.error(error);
  }
  console.log('Response properties:');
  
  response.setBody({
    status: 200,
    chatAttributeUpdate
  });

  return callback(null, response);
};