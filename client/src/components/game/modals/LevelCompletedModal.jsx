import React, { useContext, useEffect } from 'react';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// API
import client from '../../../api/client';

function LevelCompletedModal() {
  const { closeLevelCompletedModel } = useContext(ToggleContext);
  const { player } = useContext(PlayerContext);

  useEffect(() => {
    if (player.playerId) {
      console.log('DDDDD PLAYER', player);
      let body = player.currencyData

      client
        .patch(`/player/${player.playerId}/update-player-funds`, body, false)
        .then((res) => {
          console.log('result', res.data);
        })

        .catch((err) => {
          console.error('Unable to update player', err);
        });
    }
  }, []);

  return (
    <article className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-[200px] w-[300px] p-2 grid grid-rows-rev'>
      <div className='text-center'>LEVEL COMPLETED</div>
      <div className='grid items-center justify-center'>
        <button
          onClick={closeLevelCompletedModel}
          className='bg-orange-800 px-2 py-1 rounded-xl active:scale-95 hover:brightness-95'
        >
          Close
        </button>
      </div>
    </article>
  );
}

export default LevelCompletedModal;
