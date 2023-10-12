import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { PlayerContext } from '../../context/PlayerContext';
// Components
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// API
import client from '../../api/client';

function LoadingPage() {
  const { user } = useContext(UserContext);
  const { player, setPlayer } = useContext(PlayerContext);

  const [foundPlayer, setFoundPlayer] = useState({});
  const [foundPlayerTiles, setFoundPlayerTiles] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      getPlayerData();
    }
  }, []);

  const getPlayerData = () => {
    client
      .get(`/player/get-player-by-id/${user.id}`)
      .then((res) => {
        let playerData = res.data.data.player;
        console.log('PLAYER RESPONSE', playerData);
        getPlayerTiles(playerData);
      })
      .catch((err) => {
        console.error('Unable to retrieve user data', err);
      });
  };

  const getPlayerTiles = (playerData) => {
    console.log('player', player);
    client
      .get(`/player/get-player-tiles/${playerData.id}`)
      .then((res) => {
        let tilesFoundData = res.data.data.tiles;
        console.log('TILES RESPONES', tilesFoundData);
        setPlayerResData(playerData, tilesFoundData);
      })
      .catch((err) => {
        console.error('BBB Unable to retrieve tiles for user', err);
      });
  };

  const setPlayerResData = (playerData, tilesFoundData) => {
    setPlayer({
      ...player,
      playerName: playerData.playerName,
      tileData: { tilesArray: tilesFoundData }
    })
    gamePageAfterLoad();
  };

  const gamePageAfterLoad = () => {
    setTimeout(() => {
      navigate('/game', { replace: true });
    }, 2000);
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
