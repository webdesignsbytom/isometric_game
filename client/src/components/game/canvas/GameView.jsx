import React, { useContext } from 'react';
// Components
import OpenMenuButton from '../menus/MainMenu/OpenMenuButton';
import GameCanvas from './GameCanvas';
import MainMenuBar from '../menus/MainMenu/MainMenuBar';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// Components
import CantAffordBuilding from '../modals/CantAffordBuilding';
import TechMenuBar from '../menus/SecondaryMenuBar/TechMenuBar';

function GameView() {
  const { displayMainMenuBar, techMenuSelected } = useContext(ToggleContext);
  const { cantAffordBuilding } = useContext(PlayerContext);
  console.log('xx cantAffordBuilding', cantAffordBuilding);

  return (
    <main className='relative grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <GameCanvas />
      {cantAffordBuilding && <CantAffordBuilding />}
      {techMenuSelected && <TechMenuBar />}
      {displayMainMenuBar ? <MainMenuBar /> : <OpenMenuButton />}
    </main>
  );
}

export default GameView;
