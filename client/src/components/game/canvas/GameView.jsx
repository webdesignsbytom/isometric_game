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
import PlayerDataModal from '../modals/PlayerDataModal';
import BuyTileModal from '../modals/BuyTileModal';

function GameView() {
  const { displayMainMenuBar, techMenuSelected, playerDataModel, buyTileScreenToggle } = useContext(ToggleContext);
  const { cantAffordBuilding } = useContext(PlayerContext);

  return (
    <main className='relative grid h-full w-full bg-red-200 border-solid border-yellow-300 border-4'>
      <GameCanvas />
      {cantAffordBuilding && <CantAffordBuilding />}
      {techMenuSelected && <TechMenuBar />}
      {playerDataModel && <PlayerDataModal />}
      {buyTileScreenToggle && <BuyTileModal />}
      {displayMainMenuBar ? <MainMenuBar /> : <OpenMenuButton />}
    </main>
  );
}

export default GameView;
