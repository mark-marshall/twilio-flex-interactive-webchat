// Package Imports
import React, { useEffect, useState } from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

// Global State Imports
import customState from './store/state';
import customReducer from './store/reducers/customReducer';

// Component Imports
import Interactives from './components/Interactives';

// Const Imports

import { loadingPlaceholder, managerStringOverrides } from './consts';

// Component
const App = ({ configuration }) => {
  // State
  const [manager, setManager] = useState(null);

  // Effects
  useEffect(() => {
    getManager();
  }, []);

  // Functions
  const getManager = async () => {
    // Init Flex Webchat Manager
    const manager = await FlexWebChat.Manager.create(configuration);
    customState.addReducer('custom', customReducer);
    manager.store.replaceReducer(customState.combinedReducers());
    // Manager string overrides
    const {
      entryPointTagLine,
      predefineChatMessageAuthorName,
      predefinedChatMessageBody,
      welcomeMessage,
    } = managerStringOverrides;
    manager.strings.EntryPointTagline = entryPointTagLine;
    manager.strings.PredefinedChatMessageAuthorName = predefineChatMessageAuthorName;
    manager.strings.PredefinedChatMessageBody = predefinedChatMessageBody;
    manager.strings.WelcomeMessage = welcomeMessage;
    // Append custom Interactives Component
    FlexWebChat.MessageList.Content.add(
      <Interactives
        key="interactives"
        colorTheme={configuration.colorTheme.overrides.Interactives}
        manager={manager}
      />
    );
    // Set manager on state
    setManager(manager);
  };

  // Render
  return (
    <>
      {manager ? (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      ) : (
        <div>{loadingPlaceholder}</div>
      )}
    </>
  );
};

export default App;
