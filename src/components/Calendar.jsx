// Package Imports
import React, { useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';

// Material UI
import { TextField, StyledEngineProvider } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';

// Component
const Calendar = ({ curInteractives, sendMessage }) => {
  // Effects
  useEffect(() => {
    moment.tz.setDefault(curInteractives.timezone);
  }, []);

  // Render
  return (
    <StyledEngineProvider injectFirst>
      <StyledCalendarContainer>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            renderInput={(props) => <TextField {...props} />}
            value={moment()}
            default={moment()}
            onChange={(value) =>
              sendMessage(
                moment(value)
                  .tz(curInteractives.timezone)
                  .format('MM/DD/YYYY')
              )
            }
            allowSameDateSelection={true}
          />
        </LocalizationProvider>
      </StyledCalendarContainer>
    </StyledEngineProvider>
  );
};

// Styled Components
const StyledCalendarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  fieldset {
    display: none;
  }
  .MuiFormControl-root {
    width: 80%;
    background: #cbe0f6;
    border-radius: 4px;
  }
  .MuiOutlinedInput-root {
    color: #233659;
    font-size: 0.9rem;
  }
`;

export default Calendar;
