import React from 'react';
// Components
import GameOverviewMenuBar from '../../components/game/menus/OverViewTopMenu/GameOverviewMenuBar';
import GameView from '../../components/game/canvas/GameView';

function GamePage() {
  console.log('llllllllllllllllllllllllllllllllllL');
  return (
    <div className='grid h-screen max-h-screen w-full bg-yellow-100 overflow-hidden'>
      <div className='grid grid-rows-reg h-full w-full overflow-hidden bg-red-200'>
        <GameOverviewMenuBar />
        <GameView />
      </div>
    </div>
  );
}

export default GamePage;
