import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Routes from './containers/Routes';
import Loading from './components/Loading/Loading.component';


const App = () => {
  const renderRouteContainers = (routes) => (routes.map((item, idx) => (
    <Route
      key={`${item.path}-${idx}`}
      exact={item.exact}
      path={item.path}
      component={item.container} />
  )))

  return (
    <Router history={history}>
      <Suspense fallback={Loading}>
        <Switch>{renderRouteContainers(Routes)}</Switch>
      </Suspense>
    </Router>
  )
}

export default App;
