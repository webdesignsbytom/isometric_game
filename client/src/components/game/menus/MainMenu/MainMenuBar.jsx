import React, { useContext } from 'react';
// Components
import MainMenuItem from './MainMenuItem';
// Data
import { MainMenuOptions } from '../../../../utils/gameData/GameOptions';
// Context
import { ToggleContext } from '../../../../context/ToggleContext';
import SecondaryMenuContainer from '../SecondaryMenuBar/SecondaryMenuContainer';
import CloseMenuButton from './CloseMenuButton';

function MainMenuBar() {
  const { selectedSecondaryMenu } = useContext(ToggleContext);

  return (
    <section className='absolute grid h-[155px] w-full bottom-0 overflow-hidden menu__background border-2 border-solid border-black'>
      <div className='relative overflow-hidden'>
        <section className='grid w-full h-full py-1 px-1 overflow-hidden'>
          {!selectedSecondaryMenu ? (
            <div className='grid grid-flow-col w-fit h-full gap-1 overflow-hidden'>
              {MainMenuOptions.map((item, index) => {
                return <MainMenuItem key={index} item={item} />;
              })}
            </div>
          ) : (
            <SecondaryMenuContainer />
          )}
        </section>
        <CloseMenuButton />
      </div>
    </section>
  );
}

export default MainMenuBar;
