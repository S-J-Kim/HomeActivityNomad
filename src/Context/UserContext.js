import React, { createContext, useState } from 'react';

const UserContext = createContext({
  accessToken: null,
  refreshToken: null,
});

const UserContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [userId, setUserId] = useState('OTT Damoa');

  return (
    <UserContext.Provider
      value={{
        accessToken,
        refreshToken,
        userId,
        setAccessToken,
        setRefreshToken,
        setUserId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
export { UserContext };
