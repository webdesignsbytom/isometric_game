import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function CityMenuBar() {
    const { player } = useContext(PlayerContext)
  return (
    <section className='absolute top-1 left-1/2 transform -translate-x-1/2 outline outline-1 outline-black bg-white rounded-xl h- p-2 grid grid-rows-rev'>
      CityMenuBar
    </section>
  );
}

export default CityMenuBar;
