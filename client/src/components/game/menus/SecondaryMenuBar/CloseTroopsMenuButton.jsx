import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';
import { closeModalIcon } from '../../../../utils/gameData/Constants';

function CloseTroopsMenuButton() {
  const { closeTroopMenu } = useContext(ToggleContext);

  return (
    <div
      onClick={closeTroopMenu}
      className='absolute top-[2px] right-[2px] cursor-pointer bg-white p-1 rounded-full'
    >
      <span>{closeModalIcon}</span>
    </div>
  );
}

export default CloseTroopsMenuButton;
