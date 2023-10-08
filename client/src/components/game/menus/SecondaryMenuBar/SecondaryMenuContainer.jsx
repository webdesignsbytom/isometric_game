import React, { useContext } from 'react';
//
import { ToggleContext } from '../../../../context/ToggleContext';
import BuildingsMenuBar from './BuildingsMenuBar';
import TechMenuBar from './TechMenuBar';
import TroopsMenuBar from './TroopsMenuBar';

function SecondaryMenuContainer() {
  const { buildingsMenuSelected, techMenuSelected, troopsMenuSelected } =
    useContext(ToggleContext);

  return (
    <div className='overflow-hidden'>
      {buildingsMenuSelected && <BuildingsMenuBar />}
      {techMenuSelected && <TechMenuBar />}
      {troopsMenuSelected && <TroopsMenuBar />}
    </div>
  );
}

export default SecondaryMenuContainer;
