import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';

function RightMenuBar() {
  const { openTroopMenu } = useContext(ToggleContext);

  return (
    <section className='grid absolute top-1/2 right-1 transform -translate-y-1/2'>
      <div className='outline outline-1 outline-black grid grid-rows-3 gap-2 p-2 rounded-lg bg-white'>
        <div
          onClick={openTroopMenu}
          title='Open Troops Owned'
          className='grid items-center justify-center cursor-pointer h-[45px] w-[45px] rounded-full outline outline-1 outline-black hover:brightness-95 active:scale-95 no__highlights'
        >
          <span className='text-xl no__highlights'>⚔️</span>
        </div>
        <div className='grid h-[45px] w-[45px] rounded-full outline outline-1 outline-black '>
          🌿
        </div>
        <div className='grid h-[45px] w-[45px] rounded-full outline outline-1 outline-black '>
          👥
        </div>
      </div>
    </section>
  );
}

export default RightMenuBar;
