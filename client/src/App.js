import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import RegisterPage from './users/register/RegisterPage';
import GamePage from './pages/game/GamePage';
import LoadingLoginPage from './pages/loading/LoadingLoginPage';
import LoadingNewUserPage from './pages/loading/LoadingNewUserPage';

function App() {
  return (
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
        <Route path='/loading' element={<LoadingLoginPage />} />
        <Route path='/loading-new-user' element={<LoadingNewUserPage />} />
      </Routes>
  );
}

export default App;
