// Package Imports
import React from 'react';

// Material UI
import { FormControl, Select, MenuItem } from '@mui/material';

const Dropdown = ({ curInteractives, sendMessage }) => {
  // Render
  return (
    <div className="interactive-dropdown-container">
      <FormControl fullWidth>
        <Select
          labelId="select-label"
          id="select"
          defaultValue={''}
          displayEmpty={true}
          renderValue={(value) => value || 'Seasonal boxes'}
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
