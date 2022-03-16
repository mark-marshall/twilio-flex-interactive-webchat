// Package Imports
import React, { useEffect } from 'react';
import moment from 'moment-timezone';

// Material UI
import { TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';

const Calendar = ({ curInteractives, sendMessage }) => {
  // Effects
  useEffect(() => {
    moment.tz.setDefault(curInteractives.timezone);
  }, []);

  // Render
  return (
    <div className="interactive-calendar-container">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          renderInput={(props) => <TextField {...props} />}
          value={moment()}
          default={moment()}
          onChange={(value) =>
            sendMessage(
              moment(value)
                .tz(curInteractives.timezone)
                .format('DD/MM/YYYY')
            )
          }
          allowSameDateSelection={true}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
