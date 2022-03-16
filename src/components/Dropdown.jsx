import React from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

const Dropdown = ({ curInteractives, sendMessage }) => {
  return (
    <div className="interactive-dropdown-container">
      <FormControl fullWidth>
        <Select
          labelId="select-label"
          id="select"
          defaultValue={curInteractives.options[0].value}
          onChange={(e) => sendMessage(e.target.value)}
        >
          {curInteractives.options.map((o, idx) => (
            <MenuItem key={o.uuid} value={o.value}>
              {o.content}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
