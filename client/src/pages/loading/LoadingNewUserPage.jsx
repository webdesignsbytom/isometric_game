import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import LoadingSpinner from '../../components/utils/LoadingSpinner';

function LoadingNewUserPage() {
  let navigate = useNavigate();

  useEffect(() => {
    gamePageAfterLoad()
  }, [])

  const gamePageAfterLoad = () => {
    setTimeout(() => {
      navigate('/game', { replace: true });
    }, 5000);
  };

  return (
    <div className='grid bg-blue-200 h-screen max-h-screen overflow-hidden w-full'>
      <main className='grid items-center justify-center h-full w-full'>
        <div className='grid h-fit'>
          <section className='grid -mt-16'>
            <div className='text-center'>
              <h2 className='font-bold text-3xl'>Loading Game...</h2>
            </div>
          </section>
          <section className='grid items-center justify-center bg-red-500'>
            <div>
              <LoadingSpinner width={'w-10'} height={'w-10'} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoadingNewUserPage;
