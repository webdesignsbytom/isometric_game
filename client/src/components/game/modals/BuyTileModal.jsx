import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../context/ToggleContext';
import { PlayerContext } from '../../../context/PlayerContext';
// Constants
import { startingTileCost } from '../../../utils/gameData/Constants';
// Functions
import { buyNewTile } from '../functions/Functions';

function BuyTileModal({ tileToPurchase }) {
  const { closeBuyTileModal } = useContext(ToggleContext);
  const {
    player,
    setPlayer,
    openCantAffordTileModal,
  } = useContext(PlayerContext);

  return (
    <article className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-[200px] w-[300px] p-2 grid'>
      <section>
        <div className='text-center'>Buy Tile</div>
        <div className='text-center text-xl font-bold'>
          <span>🪙 </span>
          {startingTileCost * player.tileData.tilesOwned}
        </div>
      </section>
      <section className='grid grid-cols-2 gap-1'>
        <div className='grid items-center justify-center'>
          <button
            onClick={() =>
              buyNewTile({
                tileToPurchase,
                closeBuyTileModal,
                player,
                setPlayer,
                openCantAffordTileModal,
              })
            }
            className='bg-orange-800 px-2 py-1 rounded-xl active:scale-95 hover:brightness-95'
          >
            Buy
          </button>
        </div>
        <div className='grid items-center justify-center'>
          <button
            onClick={closeBuyTileModal}
            className='bg-orange-800 px-2 py-1 rounded-xl active:scale-95 hover:brightness-95'
          >
            Close
          </button>
        </div>
      </section>
    </article>
  );
}

export default BuyTileModal;
