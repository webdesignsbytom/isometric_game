import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../context/ToggleContext';

function BuyTileModal() {
  const { closeBuyTileModal } = useContext(ToggleContext);

  return (
    <article className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 outline outline-1 outline-black bg-white rounded-xl h-[200px] w-[300px] p-2 grid grid-rows-rev'>
      <div className='text-center'>Buy Tile</div>
      <div className='grid items-center justify-center'>
        <button
          onClick={closeBuyTileModal}
          className='bg-orange-800 px-2 py-1 rounded-xl active:scale-95 hover:brightness-95'
        >
          Close
        </button>
      </div>
    </article>
  );
}

export default BuyTileModal;
