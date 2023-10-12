import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Components
import Navbar from '../../components/nav/Navbar';
import LoginForm from '../../components/forms/LoginForm';

function LoginPage() {
  const { setActiveNav } = useContext(ToggleContext);

  useEffect(() => {
    setActiveNav('/login');
  }, []);

  return (
    <div className='h-screen overflow-hidden grid bg-gray-50 dark:bg-black dark:text-gray-100'>
      <section className='grid h-full grid-rows-reg'>
        <Navbar />
        <main className='bg-white main__bg grid items-center justify-center'>
          <div className='grid justify-center items-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Sign in to your account
              </h1>
            </div>
            <LoginForm />
          </div>
        </main>
      </section>
    </div>
  );
}

export default LoginPage;
