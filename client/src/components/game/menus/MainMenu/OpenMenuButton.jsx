import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';

function OpenMenuButton() {
  const { openMainMenuBar } = useContext(ToggleContext);

  return (
    <div
      onClick={openMainMenuBar}
      className='absolute bottom-4 right-4 cursor-pointer hover:scale-105 active:scale-95 text-2xl p-2 outline outline-black outline-2 rounded-full bg-pink-300 no__highlights'
    >
      <span>➕</span>
    </div>
  );
}

export default OpenMenuButton;
