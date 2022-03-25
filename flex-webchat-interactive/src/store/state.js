import { combineReducers } from 'redux';
import { WebchatReducer } from '@twilio/flex-webchat-ui'

const rootReducer = (function () {
  const reducers = {flex: WebchatReducer };
  return {
    addReducer: function (slice, reducer) {
      reducers[slice] = reducer;
    },
    combinedReducers: function () {
      return combineReducers(reducers);
    }
  };
})();

export default rootReducer;