import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
// Data
import { gameOfficialName } from '../../utils/gameData/Constants';
// Form
import LoginForm from '../../components/forms/LoginForm';

function HomePage() {
  return (
    <div className='grid bg-blue-200 h-screen max-h-screen overflow-hidden w-full'>
      <div className='grid grid-rows-reg bg-red-200 h-full max-h-screen overflow-hidden w-full'>
        <Navbar />
        <main className='grid bg-green-200 h-full w-full overflow-hidden'>
          <div className='py-4 grid w-full items-center mx-auto'>
            <section className='grid h-full w-1/3 mx-auto outline outline-2 outline-black rounded-xl bg-gray-100 px-4'>
              <article className='p-1 mt-2 grid grid-flow-row'>
                <div className='mb-4 text-center'>
                  <h2 className='italic text-xl'>Welcome To</h2>
                  <h1 className='font-bold text-3xl'>{gameOfficialName}</h1>
                </div>
                <div className='grid outline-1 outline-black outline p-4 h-fit'>
                  <LoginForm />
                </div>
                <div className='grid justify-center items-center h-fit gap-2 mt-2'>
                  <div className='text-center'>
                    <span>OR</span>
                  </div>
                  <Link
                    to='/loading-new-user'
                    className='w-full px-2 py-2 outline outline-1 outline-black rounded bg-blue-300 font-semibold active:scale-95 hover:brightness-95'
                  >
                    <span>START NEW GAME</span>
                  </Link>
                </div>
                <div>
                  <img src="client\src\assets\images\game\buildings\buildings\bld9.png" alt="xxxxx" />
                  <img src={require('../../assets/images/game/buildings/buildings/bld8.png')} alt='yyyy'/>
                </div>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
