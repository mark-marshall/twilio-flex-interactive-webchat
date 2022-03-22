// Package Imports
import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// Component Imports
import Buttons from './Buttons';
import Dropdown from './Dropdown';
import Calendar from './Calendar';

// Const Imports
import { defaultCurInteractives } from '../consts';

// Component
const Interactives = ({ manager, messageList, channelSid }) => {
  // Refs
  const interactivesContainer = useRef(null);

  // State
  // @ interface Interactives {
  //   type: '' | 'buttons' | 'dropdown' | 'calendar',
  //   options?: {'value': string, 'content': string}[],
  //   dropdownLabel?: string
  //   timezone?: "TZ database name" as per: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  // }
  const [curInteractives, setCurInteractives] = useState(
    defaultCurInteractives
  );

  // Effects
  useEffect(() => {
    if (
      messageList.length > 0 &&
      !messageList[messageList.length - 1].isFromMe &&
      messageList[messageList.length - 1].source.state.attributes
        .interactiveWebchatOptions
    ) {
      const lastMessageAttributes =
        messageList[messageList.length - 1].source.state.attributes
          .interactiveWebchatOptions;
      setCurInteractives(lastMessageAttributes);
    } else {
      setCurInteractives(defaultCurInteractives);
    }
  }, [messageList]);

  useEffect(() => {
    if (curInteractives !== defaultCurInteractives) {
      interactivesContainer.current.scrollIntoView();
    }
  }, [curInteractives]);

  // Functions
  const sendMessage = async (message) => {
    const curChannel = await manager.chatClient.getChannelBySid(channelSid);
    curChannel.sendMessage(message);
  };

  // Render
  return (
    <>
      {curInteractives !== defaultCurInteractives ? (
        <StyledInteractivesContainer ref={interactivesContainer}>
          {curInteractives.type === 'buttons' ? (
            <Buttons
              curInteractives={curInteractives}
              sendMessage={sendMessage}
            />
          ) : curInteractives.type === 'dropdown' ? (
            <Dropdown
              curInteractives={curInteractives}
              sendMessage={sendMessage}
            />
          ) : curInteractives.type === 'calendar' ? (
            <Calendar
              curInteractives={curInteractives}
              sendMessage={sendMessage}
            />
          ) : (
            <></>
          )}
        </StyledInteractivesContainer>
      ) : (
        <></>
      )}
    </>
  );
};

// Redux
const mapStateToProps = (state) => {
  return {
    messageList:
      state.flex.chat.channels[state.flex.session.channelSid].messages,
    channelSid: state.flex.session.channelSid,
  };
};

// Styled Components
const StyledInteractivesContainer = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export default connect(mapStateToProps)(Interactives);
