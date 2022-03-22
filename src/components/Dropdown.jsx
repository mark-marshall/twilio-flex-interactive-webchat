// Package Imports
import React from 'react';
import styled from 'styled-components';

// Const Imports
import { defaultDropdownLabel } from '../consts';

// Material UI
import {
  FormControl,
  Select,
  MenuItem,
  StyledEngineProvider,
} from '@mui/material';

// Component
const Dropdown = ({ curInteractives, sendMessage }) => {
  // Render
  return (
    <StyledEngineProvider injectFirst>
      <StyledDropdownContainer>
        <StyledFormControl fullWidth>
          <StyledSelect
            labelId="select-label"
            id="select"
            defaultValue={''}
            displayEmpty={true}
            renderValue={(value) =>
              value || curInteractives.dropdownLabel || defaultDropdownLabel
            }
            onChange={(e) => sendMessage(e.target.value)}
          >
            {curInteractives.options.map((o, idx) => (
              <StyledMenuItem key={o.uuid} value={o.value}>
                {o.content}
              </StyledMenuItem>
            ))}
          </StyledSelect>
        </StyledFormControl>
      </StyledDropdownContainer>
    </StyledEngineProvider>
  );
};

// Styled Components
const StyledDropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StyledFormControl = styled(FormControl)`
  width: 80%;
  background: #cbe0f6;
  border-radius: 4px;
  fieldset {
    display: none;
  }
`;

const StyledSelect = styled(Select)`
  .MuiSelect-select {
    padding: 12px !important;
    color: #233659 !important;
    font-size: 0.9rem !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 0.8rem;
  &:hover {
    background: #1976d2;
    color: #fff;
  }
`;

export default Dropdown;
