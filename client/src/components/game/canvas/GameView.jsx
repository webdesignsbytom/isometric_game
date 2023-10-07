import React, { useContext, useEffect, useRef, useState } from 'react';
// Objects
import { Tile } from './Tile';
// Components
import OpenMenuButton from '../menus/MainMenu/OpenMenuButton';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import GameCanvas from './GameCanvas';
import MainMenuBar from '../menus/MainMenu/MainMenuBar';

function GameView() {
  const { displayMainMenuBar } = useContext(ToggleContext);

  return (
    <main className='relative grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <GameCanvas />

      {displayMainMenuBar ? <MainMenuBar /> : <OpenMenuButton />}
    </main>
  );
}

export default GameView;
