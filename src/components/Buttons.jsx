// Package Imports
import React from 'react';

// Material UI
import { Button } from '@mui/material';

const Buttons = ({ curInteractives, sendMessage }) => {
  // Render
  return (
    <div className="interactive-buttons-container">
      {curInteractives.options.map((o, idx) => (
        <Button
          key={o.uuid}
          onClick={() => sendMessage(o.value)}
          variant="contained"
        >
          {o.content}
        </Button>
      ))}
    </div>
  );
};

export default Buttons;
