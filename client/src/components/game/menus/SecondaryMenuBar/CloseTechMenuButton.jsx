import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';

function CloseTechMenuButton() {
  const { closeTechMenu } = useContext(ToggleContext);

  return (
    <div
      onClick={closeTechMenu}
      className='absolute top-[2px] right-[2px] cursor-pointer bg-white p-1 rounded-full'
    >
      <span>✘</span>
    </div>
  );
}

export default CloseTechMenuButton;
