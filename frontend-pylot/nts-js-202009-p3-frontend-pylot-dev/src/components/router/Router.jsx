import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import PrivateRoute from './PrivateRoute';

import FormSubscribe from '../views/FormSubscribe/FormSubscribe';
import FormConnection from '../views/FormConnection/FormConnection';

import UserContextProvider from '../../contexts/UserContextProvider';
import RoadTripContextProvider from '../../contexts/RoadTripContextProvider';

import HomePage from '../views/HomePage/HomePage';
import MapPage from '../views/MapPage/MapPage';
import MessagePage from '../views/MessagePage/MessagePage';
import RoadTripPage from '../views/RoadtripPage/RoadTripPage';
import SelectDate from '../views/RoadtripPage/SelectDate';
import SelectTime from '../views/RoadtripPage/SelectTime';
import SelectNbCoPylot from '../views/RoadtripPage/SelectNbCoPylot';
import ProfilPage from '../views/ProfilPage/ProfilPage';
import UploadProfilPic from '../views/uploadPic/UploadProfilPic';
import RoadTripMatch from '../views/RoadtripPage/RoadtTripMatch';
import RoadTripComment from '../views/RoadtripPage/RoadTripComment';
import RoadTripPublished from '../views/RoadtripPage/RoadTripPublished';
import Cgu from '../views/Cgu/Cgu';
import ProfilPreferences from '../views/ProfilPreferences/ProfilPreferences';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Auth routes */}
        <Route exact path="/">
          <HomePage />
        </Route>
        {/* Auth routes */}
        <Route exact path="/connexion">
          <FormConnection />
        </Route>
        <Route exact path="/inscription">
          <FormSubscribe />
        </Route>
        <Route exact path="/cgu">
          <Cgu />
          <ScrollUpButton
            style={{
              backgroundColor: 'white',
              width: '40px',
              height: '40px',
              transform: 'translateY(-1.75rem) translateX(1.3rem)',
              boxShadow: '#FA8A82 3px 3px 5px',
            }}
          />
        </Route>
        <UserContextProvider>
          {/* Roadtrip routes */}
          <RoadTripContextProvider>
            <PrivateRoute exact path="/map" component={MapPage} />
            <PrivateRoute exact path="/trajet-date" component={SelectDate} />
            <PrivateRoute exact path="/trajet-time" component={SelectTime} />
            <PrivateRoute
              exact
              path="/trajets-matchs"
              component={RoadTripMatch}
            />
            <PrivateRoute
              exact
              path="/trajet-co-pylot"
              component={SelectNbCoPylot}
            />
            <PrivateRoute exact path="/trajets" component={RoadTripPage} />
            <PrivateRoute
              exact
              path="/trajet-comment"
              component={RoadTripComment}
            />
            <PrivateRoute
              exact
              path="/trajet-published"
              component={RoadTripPublished}
            />
            <PrivateRoute
              exact
              path="/profil-preferences"
              component={ProfilPreferences}
            />
            {/* Profil routes */}
          </RoadTripContextProvider>
          {/* Profil routes */}
          <PrivateRoute
            exact
            path="/profil-photo"
            component={UploadProfilPic}
          />
          <PrivateRoute exact path="/profil" component={ProfilPage} />
          {/* Message routes */}
          <PrivateRoute exact path="/message" component={MessagePage} />
        </UserContextProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
