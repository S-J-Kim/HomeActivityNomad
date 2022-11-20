import React, { createContext, useState } from 'react';

const TasteCheckContext = createContext();

const TasteCheckContextProvider = ({ children }) => {
  const [tasteCheckData, setTasteCheckData] = useState({
    platformList: [],
    genreList: [],
    actorList: [],
  });

  return (
    <TasteCheckContext.Provider value={{ tasteCheckData, setTasteCheckData }}>
      {children}
    </TasteCheckContext.Provider>
  );
};

export default TasteCheckContextProvider;
export { TasteCheckContext };
