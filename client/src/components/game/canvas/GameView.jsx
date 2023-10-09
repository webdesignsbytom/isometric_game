import React, { useContext, useEffect, useRef, useState } from 'react';
// Components
import OpenMenuButton from '../menus/MainMenu/OpenMenuButton';
import GameCanvas from './GameCanvas';
import MainMenuBar from '../menus/MainMenu/MainMenuBar';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
import CantAffordBuilding from '../modals/CantAffordBuilding';

function GameView() {
  const { displayMainMenuBar } = useContext(ToggleContext);
  const { cantAffordBuilding } = useContext(PlayerContext);
  console.log('xx cantAffordBuilding', cantAffordBuilding);

  return (
    <main className='relative grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <GameCanvas />
      {cantAffordBuilding && <CantAffordBuilding />}
      {displayMainMenuBar ? <MainMenuBar /> : <OpenMenuButton />}
    </main>
  );
}

export default GameView;
