import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';

function CloseMenuButton() {
  const { closeMainMenuBar } = useContext(ToggleContext);

  return (
    <div
      onClick={closeMainMenuBar}
      className='absolute top-1 right-1 cursor-pointer bg-white p-1 rounded-full'
    >
      <span>✘</span>
    </div>
  );
}

export default CloseMenuButton;
