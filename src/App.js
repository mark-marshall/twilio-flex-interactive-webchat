import React, { useEffect, useState } from 'react';
import * as FlexWebChat from '@twilio/flex-webchat-ui';
import customState from './store/state';
import customReducer from './store/reducers/customReducer';
import Interactives from './components/Interactives';

const App = ({ configuration }) => {
  const [manager, setManager] = useState(null);

  useEffect(() => {
    getManager();
  }, []);

  const getManager = async () => {
    const manager = await FlexWebChat.Manager.create(configuration);

    customState.addReducer('custom', customReducer);
    manager.store.replaceReducer(customState.combinedReducers());
    manager.strings.EntryPointTagline = 'Fresh Fruit Co.';
    manager.strings.WelcomeMessage =
      'Welcome to customer service @ Fresh Fruit Co.';
    manager.strings.PredefinedChatMessageBody = 'Hello 👋 and welcome!';
    manager.strings.PredefinedChatMessageAuthorName = 'Fresh Fruit Bot';

    FlexWebChat.MessageList.Content.add(
      <Interactives key="interactives" manager={manager} />
    );

    setManager(manager);
  };

  return (
    <>
      {manager ? (
        <FlexWebChat.ContextProvider manager={manager}>
          <FlexWebChat.RootContainer />
        </FlexWebChat.ContextProvider>
      ) : (
        <div>...</div>
      )}
    </>
  );
};

export default App;
