import React from 'react';
// Components
import CloseTroopsMenuButton from '../SecondaryMenuBar/CloseTroopsMenuButton';

function TroopsOwnedMenu() {
  return (
    <section className='absolute top-1/2 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-[500px] w-[500px] p-2 grid'>
      <div className='relative grid w-full h-full overflow-hidden'>
        <CloseTroopsMenuButton />
        <section className='grid grid-rows-reg p-1 gap-2 overflow-hidden'>
          <div className='text-center'>
            <h4>Troops</h4>
          </div>
        </section>
      </div>
    </section>
  );
}

export default TroopsOwnedMenu;
