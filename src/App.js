import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedElement from './ProtectedElement';
import Login from './pages/Login';
import DesignLibrary from './pages/DesignLibrary';
import CollectionPage from './pages/CollectionPage';
import ShareFeed from './pages/ShareFeed';
import DesignStudio from './pages/DesignStudio';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import Help from './pages/Help';
import PublicCollectionPage from './pages/PublicCollectionPage';
import UserProvider from './UserProvider'; // import your UserProvider
import { DesignStudioProvider } from './DesignStudioContext';

const App = () => {
  return (
    <UserProvider>  
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/designlibrary/:username" element={<ProtectedElement><DesignLibrary /></ProtectedElement>} />
          <Route path="/collection/:collection_id" element={<ProtectedElement><CollectionPage /></ProtectedElement>} />
          <Route path="/collection/:collection_id/:collectionName" element={<PublicCollectionPage />} />
          <Route path="/sharefeed" element={<ShareFeed /> }/>
          <Route path="/designstudio/:collection_name/:design_id" element={
            <ProtectedElement>
              <DesignStudioProvider>
                <DesignStudio />
              </DesignStudioProvider>
            </ProtectedElement>
          } />
          <Route path="/settings/:username" element={<ProtectedElement><Settings /></ProtectedElement>} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path='/help' element={<ProtectedElement><Help /></ProtectedElement>} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;

