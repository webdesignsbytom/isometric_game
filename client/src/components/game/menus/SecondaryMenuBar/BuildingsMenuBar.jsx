import React, { useContext, useState } from 'react';
// Data
import { BuildingsMenuArray } from '../../../../utils/gameData/BuildingsData';
// Context
import { PlayerContext } from '../../../../context/PlayerContext';

function BuildingsMenuBar() {
  const { buyBuilding } = useContext(PlayerContext)
  const [availableBuildings, setAvailableBuildings] = useState(BuildingsMenuArray);

  return (
    <section className='grid h-full w-full bg-blue-500 overflow-hidden'>
      <div className='overflow-x-auto w-full h-full bg-green-200 p-1'>
        <div className='grid grid-flow-col gap-1'>
          {availableBuildings.map((building, index) => (
            <article onClick={() => buyBuilding(building)} key={index} className='grid w-[130px] outline outline-1 outline-black rounded-lg'>
              <div>{building.title}</div>
              <div className='grid items-center justify-center'>
                <img className='w-[80px] h-[80px] object-contain' src={building.imageUrl} alt={building.title} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildingsMenuBar;
