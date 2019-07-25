import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import FilteredElements from './components/FilteredElements';

export default function Routes() {
  return (
  <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/AboutMe' exact component={AboutMe} />
      <Route path='/Portfolio' exact component={Portfolio} />
      <Route path='/FE' exact component={FilteredElements} />
  </Switch>
  );
}
