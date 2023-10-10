import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../context/PlayerContext';

function PlayerDataModal() {
  const { player } = useContext(PlayerContext);

  return (
    <section className='absolute top-1 right-1 h-[80px] w-[120px] outline outline-1 outline-black rounded-lg bg-yellow-200'>
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
        </section>
      </div>
    </section>
  );
}

export default PlayerDataModal;
