import React from 'react';
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import customState from './store/state';
import customReducer from './store/reducers/customReducer';
import EndChatModal from './components/endChatModal'
import EndChatButton from './components/endChatButton'

class App extends React.Component {

  state = {};

  constructor(props) {
    super(props);

    const { configuration } = props;
      
    FlexWebChat.Manager.create(configuration)
        .then(manager => {
            customState.addReducer('custom', customReducer);
            manager.store.replaceReducer(customState.combinedReducers());

            FlexWebChat.MessagingCanvas.Content.add(<EndChatModal key="end-chat-modal" />)

            FlexWebChat.MainHeader.Content.remove('close-button');
            FlexWebChat.MainHeader.Content.add(<EndChatButton key="end-chat-button" />, { sortOrder: -1, align: "end" });

            this.setState({ manager })
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
