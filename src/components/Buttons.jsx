// Package Imports
import React from 'react';
import styled from 'styled-components';

// Material UI
import { Button, StyledEngineProvider } from '@mui/material';

// Component
const Buttons = ({ curInteractives, sendMessage }) => {
  // Render
  return (
    <StyledEngineProvider injectFirst>
      <StyledButtonsContainer>
        {curInteractives.options.map((o, idx) => (
          <StyledButton
            key={o.uuid}
            onClick={() => sendMessage(o.value)}
            variant="contained"
          >
            {o.content}
          </StyledButton>
        ))}
      </StyledButtonsContainer>
    </StyledEngineProvider>
  );
};

// Styled Components
const StyledButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 0px;
`;

const StyledButton = styled(Button)`
  font-size: 0.8rem;
  text-transform: none;
  margin-bottom: 5px;
  background: #cbe0f6;
  color: #233659;
  box-shadow: none;
  padding: 10px;
  &:hover {
    background: #1976d2;
    color: #fff;
    box-shadow: none;
  }
`;

export default Buttons;
