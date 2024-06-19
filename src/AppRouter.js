// eslint-disable no-console
import React, { useEffect } from 'react';
import { isString } from 'lodash';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './views/App';
import Inventory from './views/Inventory';

import store from './store';
import sets from './setData';
import * as ls from './lib/ls';

export default function AppRouter() {
  useEffect(() => {
    const loc = browserHistory.getCurrentLocation();
    ls.setLastPage(loc.pathname);
    browserHistory.listen(ev => ls.setLastPage(ev.pathname));
  }, []);

  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path="/" component={Inventory} setData={sets.yearSeven} />
          <Route path="/year-1" component={Inventory} setData={sets.yearOne} />
          <Route path="/year-2" component={Inventory} setData={sets.yearTwo} />
          <Route path="/year-3" component={Inventory} setData={sets.yearThree} />
          <Route path="/year-4" component={Inventory} setData={sets.yearFour} />
          <Route path="/year-5" component={Inventory} setData={sets.yearFive} />
          <Route path="/year-6" component={Inventory} setData={sets.yearSix} />
          <Route path="/year-7" component={Inventory} setData={sets.yearSeven} />
        </Route>
      </Router>
    </Provider>
  );
}

/**
 * Warning from React Router, caused by react-hot-loader.
 * The warning can be safely ignored, so filter it from the console.
 * Otherwise you'll see it every time something changes.
 * See https://github.com/gaearon/react-hot-loader/issues/298
 */
if (module.hot) {
  const orgError = console.error;
  console.error = (...args) => {
    if (
      args &&
      args.length === 1 &&
      isString(args[0]) &&
      args[0].indexOf('You cannot change <Router routes>;') > -1
    ) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };
}
