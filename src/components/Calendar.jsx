import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DatePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import moment from 'moment';

const Calendar = ({ curInteractives, sendMessage }) => {
  const [curDateValue, setDateValue] = useState(moment());

  return (
    <div className="interactive-calendar-container">
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DatePicker
          renderInput={(props) => <TextField {...props} />}
          value={curDateValue}
          defaultValue={moment()}
          onChange={(value) => setDateValue(moment(value))}
        />
      </LocalizationProvider>
      <Button onClick={() => sendMessage(curDateValue.format('MM/DD/YYYY'))}>
        Select Date
      </Button>
    </div>
  );
};

export default Calendar;
