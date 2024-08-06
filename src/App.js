import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import RoomPage from './pages/Room/RoomPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path='/pages/room/:roomId' element={<RoomPage/>} />
    </Routes>
  );
}

export default App;
