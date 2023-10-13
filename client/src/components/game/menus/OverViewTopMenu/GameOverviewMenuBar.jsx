import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function GameOverviewMenuBar() {
  const { player } = useContext(PlayerContext);

  return (
    <section className='grid h-[30px] grid-flow-col justify-between max-h-[30px] w-full bg-green-300 border-solid border-2 border-amber-800 px-1'>
      {/* World data */}
      <section>GameMenuBar</section>
      {/* Player data */}
      <section>
        <div>
          <h4 className='font-semibold'>{player.cityData.cityName}</h4>
        </div>
      </section>
      {/* Currency */}
      <section className='grid items-center'>
        <div className='grid grid-flow-col gap-1'>
          <div
            className='outline-1 outline outline-black rounded px-1 text-sm font-semibold cursor-pointer'
            title='Currency'
          >
            <span>🪙 {player.currencyData.gold}</span>
          </div>
          <div
            className='outline-1 outline outline-black rounded px-1 text-sm font-semibold cursor-pointer'
            title='Currency'
          >
            <span>💎 {player.currencyData.gems}</span>
          </div>
        </div>
      </section>
    </section>
  );
}

export default GameOverviewMenuBar;
