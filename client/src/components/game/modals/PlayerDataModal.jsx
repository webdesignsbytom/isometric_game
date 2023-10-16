import React, { useContext, useEffect } from 'react';
// Context
import { PlayerContext } from '../../../context/PlayerContext';
import { ToggleContext } from '../../../context/ToggleContext';

function PlayerDataModal() {
  const { player, currentLevelData, setPlayer } = useContext(PlayerContext);
  const { openLevelCompletedModel } = useContext(ToggleContext);

  // Calculate the percentage of xpCompleted
  const xpCompleted =
    (player.currentXp / currentLevelData.xpRequired) * 200 || 1;

  useEffect(() => {
    if (player.currentXp >= currentLevelData.xpRequired) {
      // Update level number
      let currentLevel = player.playerLevel;
      let newLevelNum = currentLevel + 1;

      // Update xp
      let currentXp = player.currentXp;
      let xpToRemove = currentLevelData.xpRequired;
      let newXp = currentXp - xpToRemove;
      let currentTotalXp = player.totalXp;
      let totalXp = currentTotalXp + xpToRemove;

      setPlayer({
        ...player,
        playerLevel: newLevelNum,
        currentXp: newXp,
        totalXp: totalXp,
      });
      openLevelCompletedModel();
    }
  }, [player.currentXp]);

  return (
    <section className='absolute top-1 right-1 outline outline-1 outline-black rounded-lg bg-yellow-200 p-1'>
      <div className='grid grid-rows-rev gap-1'>
        <div className='grid grid-cols-reg gap-1'>
          <section className='grid items-center justify-center pl-1'>
            <img
              className='grid h-[50px] w-[50px] rounded-full object-contain'
              src={player.playerImage}
              alt='Player avatar'
            />
          </section>
          <section className='grid w-full h-fit p-1'>
            <div className='bg-red-500 grid grid-rows-3 leading-5 outline outline-1 outline-black rounded p-1'>
              <div>
                <span className='text-sm font-semibold'>
                  {player.playerName}
                </span>
              </div>
              <div>
                <span className='text-sm font-semibold leading-4'>Level </span>
                <span className='text-sm font-semibold leading-4'>
                  {player.playerLevel}
                </span>
              </div>
              <div>
                
              </div>
            </div>
          </section>
        </div>
        <section className='px-2 mb-2'>
          <div title={`XP ${player.currentXp}`} className='bg-red-500 cursor-pointer relative w-[200px] h-[11px] grid items-center justify-start outline outline-1 outline-black rounded overflow-hidden'>
            <div
              title={`XP ${player.currentXp}`}
              className={`bg-blue-600 h-[9px] outline outline-1 outline-black rounded cursor-pointer`}
              style={{ width: xpCompleted }}
            ></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs pb-0.5 font-semibold'>
              {player.currentXp}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default PlayerDataModal;
