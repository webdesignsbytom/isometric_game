import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function CityMenuBar() {
  const { player } = useContext(PlayerContext);

  return (
    <section className='absolute top-1 left-1/2 transform -translate-x-1/2 outline outline-1 outline-black bg-white rounded-xl h- p-2 grid grid-rows-rev'>
      <article>
        <section>
          <div className='text-center'><span>{player.cityData.cityName}</span></div>
        </section>
        <section>
          <div>1</div>
          <div>1</div>
        </section>
      </article>
    </section>
  );
}

export default CityMenuBar;
