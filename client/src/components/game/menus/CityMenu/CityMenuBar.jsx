import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function CityMenuBar() {
  const { player } = useContext(PlayerContext);

  return (
    <section className='absolute top-1 left-1/2 transform -translate-x-1/2 outline outline-1 outline-black bg-white rounded-xl h- p-2 grid grid-rows-rev w-fit'>
      <article className='grid w-full'>
        <section>
          <div className='text-center'>
            <span>{player.cityData.cityName}</span>
          </div>
        </section>
        <section className='grid grid-flow-col grid-cols-2 gap-1 w-full outline outline-1 outline-black p-0.5 rounded-sm'>
          <div title='City Health' className='grid grid-cols-reg outline outline-1 outline-black py-0.5 cursor-pointer px-1 rounded-sm'>
            <span className='text-xl no__highlights'>🏰</span>
            <span>{player.cityData.cityHealth}</span>
          </div>
          <div title='City Defense' className='grid grid-cols-reg outline outline-1 outline-black py-0.5 cursor-pointer px-1 rounded-sm'>
            <span className='text-xl no__highlights'>🛡️</span>
            <span>{player.cityData.cityDefense}</span>
          </div>
        </section>
      </article>
    </section>
  );
}

export default CityMenuBar;
