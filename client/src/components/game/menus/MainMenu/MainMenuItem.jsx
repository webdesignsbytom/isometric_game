import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';

function MainMenuItem({ item }) {
  const { openSecondaryMenu } = useContext(ToggleContext)
  return (
    <article
    onClick={() => openSecondaryMenu(item.name)}
      className='grid grid-rows-reg w-[100px] outline outline-1 outline-black rounded-lg hover:brightness-95 active:scale-95 bg-yellow-800 py-1 cursor-pointer'
    >
      <div className='text-center'>
        <span>{item.title}</span>
      </div>
      <div className='grid items-center justify-center'>
        <span className='text-4xl'>{item.image}</span>
      </div>
    </article>
  );
}

export default MainMenuItem;
