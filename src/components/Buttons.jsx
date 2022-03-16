import React from 'react';
import { Button } from '@mui/material';

import './Buttons.css';

const Buttons = ({ curInteractives, sendMessage }) => {
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
