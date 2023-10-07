import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from './pages/home/HomePage';
import LoginPage from './users/login/LoginPage';
import RegisterPage from './users/register/RegisterPage';
import GamePage from './pages/game/GamePage';

function App() {
  return (
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/' index element={<GamePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<RegisterPage />} />
      </Routes>
  );
}

export default App;
