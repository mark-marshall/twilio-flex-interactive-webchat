/*
  This is a custom reducer example and you can delete it at any time. It is
  added into the root reducer with a call to FlextendedState.addReducer().
  It manages a slice of Redux state composed of a simple object with a 'flag'
  boolean property.
  It handles a single action -- 'MY_CUSTOM_ACTION' -- which sets the flag
  value. This action is dispatched from the CustomActionButton.
*/
const initialState = {};

const CustomReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CustomReducer;
