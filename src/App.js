import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DesignLibrary from './pages/DesignLibrary';
import CollectionPage from './pages/CollectionPage';
import ShareFeed from './pages/ShareFeed';
import DesignStudio from './pages/DesignStudio';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import Help from './pages/Help'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/designlibrary" element={<DesignLibrary />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/sharefeed" element={<ShareFeed />} />
        <Route path="/designstudio" element={<DesignStudio />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </Router>
  );
};

export default App;
