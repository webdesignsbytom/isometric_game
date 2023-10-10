import React, { useContext } from 'react';
import { PlayerContext } from '../../../context/PlayerContext';

function PlayerDataModal() {
  const { player, currentLevelData } = useContext(PlayerContext);

  // Calculate the percentage of xpCompleted
  const xpCompleted =
    (player.currentXp / currentLevelData.xpRequired) * 100 || 1;
  console.log('xpCompleted', xpCompleted);
  // const formattedString = `w-[${xpCompleted.toFixed(0)}px]`;
  // console.log('formattedString', formattedString);

  return (
    <section className='absolute top-1 right-1 h-[100px] w-[120px] outline outline-1 outline-black rounded-lg bg-yellow-200'>
      <div className='grid grid-rows-rev gap-1'>
        <div className='grid grid-cols-reg gap-1'>
          <section>
            <img
              className='grid h-[50px] w-[50px] rounded-full object-contain'
              src={player.playerImage}
              alt='Player avatar'
            />
          </section>
          <section>
            <div>{player.playerName}</div>
            <div>Level {player.playerLevel}</div>
            <div>{currentLevelData.xpRequired}</div>
          </section>
        </div>
        <section className='px-2'>
          <div className='bg-red-500 w-[100px] h-[11px] grid items-center justify-start outline outline-1 outline-black rounded overflow-hidden'>
            <div
              className={`bg-blue-600 h-[9px]`}
              style={{ width: xpCompleted }}
            ></div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PlayerDataModal;
