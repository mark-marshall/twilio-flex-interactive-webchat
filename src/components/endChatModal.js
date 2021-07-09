import React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

const center = {
  textAlign: 'center',
  position: 'absolute',
  paddingTop: '50%',
  top: '0px',
  bottom: '0px',
  left: '0px',
  right: '0px',
  background: 'rgba(255, 255, 255, 1)'
};

class EndChatModal extends React.Component {
  constructor(props) {
    super();
      this.props = props;
  }

    render() {
    return (
      // If they click yes, it will reset the chat interaction
      // If they press no, it will return to the chat
      this.props.showEndChatModal ?
        <div style={ center }>
                <p>Are you sure you want to end the chat?</p>
                <FlexWebChat.Button onClick={() => {
                    FlexWebChat.Actions.invokeAction('RestartEngagement');
                    FlexWebChat.Actions.invokeAction('ToggleChatVisibility')
                    return this.props.dispatch({
                      type: 'SET_SHOW_END_CHAT_MODAL',
                      payload: { showEndChatModal: false }
                  })
                }}>Yes</FlexWebChat.Button>
                <FlexWebChat.Button onClick={() => {
                    return this.props.dispatch({
                        type: 'SET_SHOW_END_CHAT_MODAL',
                        payload: { showEndChatModal: false }
                    })
                }}>No</FlexWebChat.Button>
        </div> : null
    )
  }
}

function mapStateToProps(state) {
  return { showEndChatModal: state.custom.showEndChatModal }
}

export default connect(mapStateToProps)(EndChatModal);