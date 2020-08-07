import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import {AppContextProvider} from './AppContext';
import {HomePage} from './pages/HomePage';
import {DetailsPage} from './pages/DetailsPage';

const Routes = () => {
  return (
    <AppContextProvider>
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details/:id" component={DetailsPage} />
        </Switch>
      </App>
    </AppContextProvider>
  );
};

export default Routes;
