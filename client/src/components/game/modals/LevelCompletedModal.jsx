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
    // If logged in user 
    if (player.playerId) {
      let body = player;

      client
        .patch(`/player/${player.playerId}/level-completed-update`, body, false)
        .then((res) => {
          console.log('result', res.data);
        })

        .catch((err) => {
          console.error('Unable to update player', err);
        });
    }
  }, []);

  return (
    <article className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-fit w-[300px] p-2 grid grid-rows-a1a gap-2'>
      <div className='text-center'>
        <h4 className='text-xl font-semibold'>LEVEL COMPLETED</h4>
      </div>
      <section className='text-center'>
        <div>
          <p>Strength +2</p>
        </div>
        <div>
          <p>Defense +2</p>
        </div>
        <div>
          <p>Health +10</p>
        </div>
        <div>
          <p>Speed +2</p>
        </div>
        <div>
          <p>Accuracy +2</p>
        </div>
      </section>
      <div className='grid items-center justify-center mt-2'>
        <button
          onClick={closeLevelCompletedModel}
          className='bg-orange-700 px-2 py-1 rounded-xl active:scale-95 hover:brightness-95 min-w-[100px] outline outline-1 outline-black'
        >
          Close
        </button>
      </div>
    </article>
  );
}

export default LevelCompletedModal;
