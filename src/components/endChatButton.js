import React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from "@twilio/flex-webchat-ui";

class EndChatButton extends React.Component {
  constructor(props) {
    super();
      this.props = props;
  }

    render() {
        let style = {
            cursor: "pointer"
        }
        return (
        <span style={style} onClick={() => {
            return this.props.dispatch({
                type: 'SET_SHOW_END_CHAT_MODAL',
                payload: { showEndChatModal: true }
            })
        }}>
            <FlexWebChat.Icon icon="Close" />
        </span>
    )
  }
}

function mapStateToProps(state) {
  return { showEndChatModal: state.custom.showEndChatModal }
}

export default connect(mapStateToProps)(EndChatButton);