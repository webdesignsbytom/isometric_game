import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function BuildingItem({ building }) {
  const { buyBuilding } = useContext(PlayerContext);
  return (
    <article
      onClick={() => buyBuilding(building)}
      className='grid w-[130px] outline outline-1 outline-black rounded-lg'
    >
      <div>{building.title}</div>
      <div className='grid items-center justify-center'>
        <img
          className='w-[80px] h-[80px] object-contain'
          src={building.imageUrl}
          alt={building.title}
        />
      </div>
      <div className='text-center'>
        {building.currencyType === 'gold' && <span>🪙</span>}
        {building.currencyType === 'gems' && <span>💎</span>}
        {building.cost}
      </div>
    </article>
  );
}

export default BuildingItem;
