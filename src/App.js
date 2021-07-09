import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import customState from './store/state';
import customReducer from './store/reducers/customReducer';
import EndChatModal from './components/endChatModal'
import EndChatButton from './components/endChatButton'
import ClickableMessages from './components/clickableMessages'

// import the custom listeners
import './listeners/CustomListeners';

class App extends React.Component {

  /*
    FIXME:
            - AMAZING PROGERSS!  We now have the redux working and pushing the first message.  Last piece will be to get now hook into the chat channel attribute changes
              and update the store with that and you will be in business!
    TODO:
          - Update Store with a text clickablemessages object and test the render of the button in the UI
          (COMPLETED)
          - Hook into the on/listener - payload changes and try to subscribe to updates in the attributes
          - Read attributes to redux and we should be in business
  */

  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;

    // Alter the predefined Message
    FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.body = 'Hello There!';
    FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage.authorName = 'NFM Lending';

    // Chat Header Customizations
    FlexWebChat.MainHeader.defaultProps.imageUrl = './img/NFMLendingIcon_White.png';
    FlexWebChat.MainHeader.defaultProps.titleText = "NFM Lending";
    FlexWebChat.MainHeader.defaultProps.showTitle = true;
      
    FlexWebChat.Manager.create(configuration)
        .then(manager => {

            // set some variables on the global window object
            // these help us determine if flex has loaded or not
            window.Twilio = window.Twilio || {};
            FlexWebChat.manager =  manager;
            window.Twilio.FlexWebChat = FlexWebChat;


            // Register the custom redux/reducer
            customState.addReducer('custom', customReducer);
            manager.store.replaceReducer(customState.combinedReducers());

            this.setState({ 
              manager 
            });

            // Add the close button
            FlexWebChat.MessagingCanvas.Content.add(<EndChatModal key="end-chat-modal" />)

            FlexWebChat.MainHeader.Content.remove('close-button');
            FlexWebChat.MainHeader.Content.add(<EndChatButton key="end-chat-button" />, { sortOrder: -1, align: "end" });

            // Add the clickable messages
            FlexWebChat.MessageInput.Content.add(<ClickableMessages key="ClickableMessages" />, {sortOrder: -1});
          
        })
        .catch(error => this.setState({ error }));
  }
  

  render() {
    const { manager, error } = this.state;

    if (manager) {
      return (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      );
    }

    if (error) {
      console.error("Failed to initialize Flex Web Chat", error);
    }

    return null;
  }
}

export default App;
