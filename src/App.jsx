import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Discover from './views/Discover';
import PackFeed from './views/PackFeed';
import PlaydateCalendar from './views/Calendar';
import Profile from './views/Profile';
import ProfileDisplay from './components/ProfilePage/ProfileDisplay';
import ProfilePage from './components/ProfilePage/ProfilePage';
import './App.css';
// import Playdate from './components/Calendar/EditPlaydate';

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/packFeed" element={<PackFeed />} />
        <Route path="/calendar" element={<PlaydateCalendar />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </div>
  );
};

export default App;
