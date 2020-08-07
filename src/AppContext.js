import React, {createContext, useState, useEffect} from 'react';

const MOBILE_WIDTH = 1200;

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

const AppContext = createContext({
  state: {
    isMobile: isMobileWidth(),
    searchTerm: '',
  },
});
const AppContextProvider = ({children}) => {
  let [state, setState] = useState({
    isMobile: isMobileWidth(),
  });

  const handleOnResize = () => {
    setIsMobile(isMobileWidth());
  };

  useEffect(
    () => window.addEventListener('resize', () => handleOnResize()),
    []
  );

  const setIsMobile = (isMobile) => {
    setState((prevState) => ({
      ...prevState,
      isMobile,
    }));
  };

  const setSearchTerm = (searchTerm) => {
    setState((prevState) => ({
      ...prevState,
      searchTerm,
    }));
  };

  return (
    <AppContext.Provider value={{state, setSearchTerm}}>
      {children}
    </AppContext.Provider>
  );
};

export {AppContext, AppContextProvider};
