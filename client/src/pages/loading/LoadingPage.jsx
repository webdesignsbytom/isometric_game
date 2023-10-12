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

  console.log('0000000000000', player);
  const [foundPlayer, setFoundPlayer] = useState({});
  const [foundPlayerTiles, setFoundPlayerTiles] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    if (user.id) {
      getPlayerData();
    }
  }, []);

  const getPlayerData = () => {
    console.log('111111111111111111');

    client
      .get(`/player/get-player-by-id/${user.id}`)
      .then((res) => {
        console.log('AAA res', res.data);
        let playerData = res.data.data.player;
        console.log('AAA RES PLAYER DATA', playerData);
        console.log('AAA', playerData);
        getPlayerTiles(playerData);
      })
      .catch((err) => {
        console.error('Unable to retrieve user data', err);
      });
  };

  async function getPlayerTiles(playerData) {
    console.log('2222222222222222222222 res player', playerData);

    client
      .get(`/player/get-player-tiles/${playerData.id}`)
      .then((res) => {
        console.log('BBB res RRRRRRRRRRRR', res.data.data.tiles);
        let tilesFoundData = res.data.data.tiles;
        setPlayerResData(playerData, tilesFoundData);
      })
      .catch((err) => {
        console.error('BBB Unable to retrieve tiles for user', err);
      });
  }

  const setPlayerResData = (playerData, tilesFoundData) => {
    console.log('3333333333333333333', tilesFoundData);
    let updatedPlayer = player;
    // console.log('4444444444444', updatedPlayer);

    // Update player state
    updatedPlayer.id = playerData.id;
    updatedPlayer.playerName = playerData.playerName;
    updatedPlayer.playerLevel = playerData.playerLevel;
    updatedPlayer.playerImage = playerData.playerImage;
    updatedPlayer.currentXp = playerData.currentXp;
    updatedPlayer.totalXp = playerData.totalXp;
    updatedPlayer.currencyData.gold = playerData.gold;
    updatedPlayer.currencyData.gems = playerData.gems;

    console.log('tilesFoundData', tilesFoundData);
    // Update tiles
    let foundTilesCount = tilesFoundData.length;
    console.log('foundTilesCount', foundTilesCount);
    console.log('11 UPDATED PLAYER', updatedPlayer);

    let tileObject = updatedPlayer.tileData
    tileObject.tilesArray = tilesFoundData

    updatedPlayer.tileData.tilesOwned = foundTilesCount;
    updatedPlayer.tileData.tilesArray = tilesFoundData;

    console.log('22 UPDATED PLAYER', updatedPlayer);
    // setPlayer(updatedPlayer);

    setTimeout(() => {
      gamePageAfterLoad();
    }, 2000);
  };

  const gamePageAfterLoad = () => {
    console.log('999999999999999999999999');
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
