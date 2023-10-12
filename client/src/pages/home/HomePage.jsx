import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Data
import { gameOfficialName } from '../../utils/gameData/Constants';
// Form
import LoginForm from '../../components/forms/LoginForm';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='grid bg-blue-200 h-screen max-h-screen overflow-hidden w-full'>
      <div className='grid grid-rows-reg bg-red-200 h-full max-h-screen overflow-hidden w-full'>
        <Navbar />
        <main className='grid bg-green-200 h-full w-full overflow-hidden'>
          <div className='py-4 grid w-full items-center mx-auto'>
            <section className='grid h-full w-1/3 mx-auto outline outline-2 outline-black rounded-xl'>
              <article className='p-1 mt-2 grid grid-flow-row'>
                <div className='mb-4 text-center'>
                  <h2>Welcome To</h2>
                  <h1>{gameOfficialName}</h1>
                </div>
                <div className='grid outline-1 outline-black outline p-1'>
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
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default HomePage;
