import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Profile from './components/Profile';

function App() {
  return (
    <Routes>
      <Route path='/profile/:email' element={<Profile />} />
      <Route index element={<Auth />} />
    </Routes>
  );
}

export default App;
