import UserContext from './UserContext';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from './graphql/queries';
import React, { useState, useEffect } from 'react';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await Auth.currentAuthenticatedUser();
        const result = await API.graphql(
          graphqlOperation(getUser, { id: currentUser.signInUserSession.idToken.payload.sub })
        );
        
        setUser(result.data.getUser);
        
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return null; // or return a loading spinner
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
