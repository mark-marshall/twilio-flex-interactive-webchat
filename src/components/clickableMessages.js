import React from 'react';
import { connect } from 'react-redux';
import * as FlexWebChat from '@twilio/flex-webchat-ui';

const wrapper = {
    display: 'block',
    overflowX: 'hidden',
    justifyContent: 'center',
    width: '40%'
}

const bubble = {
    paddingLeft: '12px',
    paddingRight: '12px',
    color: 'black',
    paddingTop: '5px',
    paddingBottom: '8px',
    margin: '5px 10px',
    position: 'relative',
    overflowX: 'hidden',
    display: 'flex',
    background: '#eeeeee',
    borderRadius: '6px',
    fontSize: '1em'
}

class ClickableMessages extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  // We are going to get the channel, then add a channel listener (to subscribe to) any time there are updates to
  // the attributes of the channel.  From there we will push the updated clickableMessages object into redux
  // and that is how we are rendering button/component changes as the studio flow push new objects throughout the flow!
  getChannelAttributes() {
    const dispatch = this.props.dispatch; 

    FlexWebChat.manager.chatClient.getChannelBySid(this.props.channelSid)
    .then(channel => {
      channel.on('updated', ({ channel, updateReasons }) => {
        if ( updateReasons.indexOf('attributes') !== -1 &&channel.attributes.status === "INACTIVE") {
          FlexWebChat.Actions.invokeAction('RestartEngagement');
          return;
        }
        if (undefined !== channel.attributes.clickableMessages && (updateReasons.indexOf('attributes') !== -1)) {
          dispatch({
            type: 'SET_CLICKABLE_MESSAGES',
            payload: {
              clickableMessages: channel.attributes.clickableMessages
            }
          })
        }
      });
    })
  }

  render() {
    const channelSid = this.props.channelSid;
    const dispatch = this.props.dispatch; 

    this.getChannelAttributes();

    return (
      this.props.clickableMessages ?
        <div className="generatedAnswers" style={wrapper}>
          { this.props.clickableMessages.map(function(m) {
            return (
              <div className="generatedAnswerBubble" style={bubble} onClick={(e) => {
                // This removes all the clickable messages on click to reset the buttons
                dispatch({
                  type: 'SET_CLICKABLE_MESSAGES',
                  payload: { clickableMessages: [] }
                })
                // Once they click the button, we will post that as the message in the chat
                FlexWebChat.manager.chatClient.getChannelBySid(channelSid)
                .then(channel => {
                  channel.sendMessage(m.message);
                });                 
              }} key={m.message}>
                {m.message}
              </div>
            );
          }) }
        </div> : null
    )
  }
}

const mapStateToProps = (state) => {
  let channelSid = state.flex.session.channelSid;

  return { 
    clickableMessages: state.custom.clickableMessages,
    channelSid
  }
}

export default connect(mapStateToProps)(ClickableMessages);