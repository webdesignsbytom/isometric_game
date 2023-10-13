import React, { useContext } from 'react';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function BuildingItem({ building }) {
  const { buyBuilding } = useContext(PlayerContext);
  console.log('BUILDING ITEM JSX', building);

  
  return (
    <article
      onClick={() => buyBuilding(building)}
      className='grid h-full w-[120px] outline outline-1 outline-black bg-gray-100 rounded-lg active:scale-95 hover:brightness-105 cursor-pointer'
    >
      <div className='px-[2px] text-sm font-semibold'><h6>{building.title}</h6></div>
      <div className='grid items-center justify-center'>
        <img
          className='w-[50px] h-[50px] object-contain'
          src={building.imageUrl}
          alt={building.title}
        />
      </div>
      <div className='text-center'>
        {building.currencyType === 'gold' && <span>🪙</span>}
        {building.currencyType === 'gems' && <span>💎</span>}
        <span className='font-semibold'>{building.cost}</span>
      </div>
    </article>
  );
}

export default BuildingItem;
