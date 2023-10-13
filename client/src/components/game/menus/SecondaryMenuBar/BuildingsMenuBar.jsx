import React, { useState } from 'react';
// Data
import { BuildingsMenuArray } from '../../../../utils/gameData/BuildingsData';

import BuildingItem from './BuildingItem';

function BuildingsMenuBar() {
  const [availableBuildings, setAvailableBuildings] =
    useState(BuildingsMenuArray);
console.log('9availableBuildings', availableBuildings);
console.log('9BuildingsMenuArray', BuildingsMenuArray);
  return (
    <section className='grid h-full w-full overflow-hidden'>
      <div className='overflow-x-auto w-full h-full p-1 bg-blue-600 rounded-lg overflow-y-hidden'>
        <div className='grid grid-flow-col gap-1.5 h-full '>
          {availableBuildings.map((building, index) => (
            <BuildingItem key={index} building={building} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuildingsMenuBar;
