import { lazy, Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppWrapper from 'components/AppWrapper';
import Loader from 'components/Loader';

function App() {
  const history = createBrowserHistory();

  const Users = lazy(() =>
    import(/* webpackChunkName: "view-users" */ 'views/Users')
  );

  const Chat = lazy(() =>
    import(/* webpackChunkName: "view-chat" */ 'views/Chat')
  );

  return (
    <AppWrapper>
      <Router history={history}>
          <Suspense fallback={<Loader />}>
            <Switch>
                <Route path="/chat" exact component={Chat} />
                <Route path="/users" exact component={Users} />
                <Route path="/*" exact component={Users} />
            </Switch>
          </Suspense>
      </Router>
    </AppWrapper>
  );
}

export default App;
