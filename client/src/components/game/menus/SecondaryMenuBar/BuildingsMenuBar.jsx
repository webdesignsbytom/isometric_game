import React, { useState } from 'react';
// Data
import { BuildingsMenuArray } from '../../../../utils/gameData/BuildingsData';

import BuildingItem from './BuildingItem';

function BuildingsMenuBar() {
  const [availableBuildings, setAvailableBuildings] =
    useState(BuildingsMenuArray);

  return (
    <section className='grid h-full w-full bg-blue-500 overflow-hidden'>
      <div className='overflow-x-auto w-full h-full bg-green-200 p-1 overflow-y-hidden'>
        <div className='grid grid-flow-col gap-1'>
          {availableBuildings.map((building, index) => (
            <BuildingItem key={index} building={building} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildingsMenuBar;
