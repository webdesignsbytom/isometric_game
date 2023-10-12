import React, { useContext, useEffect } from 'react';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { PlayerContext } from '../../context/PlayerContext';

function LoadingPage() {
  const { user, setUser } = useContext(UserContext);
  const { player, setPlayer } = useContext(PlayerContext);

  let navigate = useNavigate();

  useEffect(() => {
    console.log('Setting player data...');
    setUserPlayerData();
  }, []);

  const setUserPlayerData = () => {
    console.log('USER', user);
    console.log('PLAYER', player);
    let loadingPlayer = user.player
    let currentPlayer = player
    // Update player state

    currentPlayer.id = loadingPlayer.id
    currentPlayer.playerName = loadingPlayer.playerName
    currentPlayer.playerLevel = loadingPlayer.playerLevel
    currentPlayer.playerImage = loadingPlayer.playerImage
    currentPlayer.currentXp = loadingPlayer.currentXp
    currentPlayer.totalXp = loadingPlayer.totalXp
    currentPlayer.townName = loadingPlayer.townName
    currentPlayer.gold = loadingPlayer.gold
    currentPlayer.gems = loadingPlayer.gems

    console.log('loading', loadingPlayer);
    setPlayer(currentPlayer)
    gamePageAfterLoad()
  };

  const gamePageAfterLoad = () => {
    navigate('/game', { replace: true });
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

export default LoadingPage;
