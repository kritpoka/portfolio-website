import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Switch() {
  const [checked, setChecked] = useState(false);

  return (
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        text = "dark"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        mode
      </ToggleButton>
  );
}

export default Switch;