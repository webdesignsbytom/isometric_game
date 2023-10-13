import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function TroopItem({ troop }) {
  const { buyTroop } = useContext(PlayerContext);

  return (
    <article
      onClick={() => buyTroop(troop)}
      className='grid h-full w-[120px] outline outline-1 outline-black bg-gray-100 rounded-lg active:scale-95 hover:brightness-105 cursor-pointer'
    >
      <div className='px-[2px] text-sm font-semibold text-center'><h6>{troop.title}</h6></div>
      <div className='grid items-center justify-center'>
        <img
          className='w-[50px] h-[50px] object-contain'
          src={troop.imageUrl}
          alt={troop.title}
        />
        {/* <div className='text-4xl'>{troop.imageUrl}</div> */}
      </div>
      <div className='text-center'>
        {troop.currencyType === 'gold' && <span>🪙</span>}
        {troop.currencyType === 'gems' && <span>💎</span>}
        <span className='font-semibold'>{troop.cost}</span>
      </div>
    </article>
  );
}

export default TroopItem;
