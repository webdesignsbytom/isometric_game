import React from 'react';
// Components
import GameMenuBar from '../../components/game/menus/GameMenuBar';
import GamesCanvas from '../../components/game/canvas/GamesCanvas';

function GamePage() {
  return (
    <div className='grid h-screen max-h-screen w-full bg-yellow-100 overflow-hidden'>
      <div className='grid grid-rows-reg h-full w-full overflow-hidden bg-red-200'>
        <GameMenuBar />
        <GamesCanvas />
      </div>
    </div>
  );
}

export default GamePage;
