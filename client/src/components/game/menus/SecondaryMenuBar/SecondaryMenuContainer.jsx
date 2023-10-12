import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';
// Components
import BuildingsMenuBar from './BuildingsMenuBar';
import TroopsMenuBar from './TroopsMenuBar';

function SecondaryMenuContainer() {
  const { buildingsMenuSelected, troopsMenuSelected } =
    useContext(ToggleContext);

  return (
    <div className='overflow-hidden'>
      {buildingsMenuSelected && <BuildingsMenuBar />}
      {troopsMenuSelected && <TroopsMenuBar />}
    </div>
  );
}

export default SecondaryMenuContainer;
