import React from 'react';
import { Switch, Route } from 'react-router-dom';

import isMobile from '../utils/isMobile';

import MainDesktop from '../pages/desktop';
import MainMobile from '../pages/mobile';

const Routes: React.FC = () => (
  <Switch>
    {isMobile() ? (
      <Route path="/" exact component={MainMobile} />
    ) : (
      <Route path="/" exact component={MainDesktop} />
    )}
  </Switch>
);

export default Routes;
