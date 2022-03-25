// Package Imports
import React from 'react';
import styled from 'styled-components';

// Material UI
import { Button, StyledEngineProvider } from '@mui/material';

// Component
const Buttons = ({ colorTheme, curInteractives, sendMessage }) => {
  // Styled Components
  const StyledButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;

  const StyledButton = styled(Button)`
    font-size: 0.8rem;
    text-transform: none;
    margin-bottom: 5px;
    background: ${colorTheme.Primary.background};
    color: ${colorTheme.Primary.fontColor};
    box-shadow: none;
    padding: 10px;
    &:hover {
      background: ${colorTheme.Hover.background};
      color: ${colorTheme.Hover.fontColor};
      box-shadow: none;
    }
  `;

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

export default Buttons;
