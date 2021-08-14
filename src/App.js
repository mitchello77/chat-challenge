import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AppWrapper from 'components/AppWrapper';
import Users from 'views/Users'
import Chat from 'views/Chat'

function App() {
  const history = createBrowserHistory();

  return (
    <AppWrapper>
      <Router history={history}>
        <Switch>
          <Route path="/chat" exact component={Chat} />
          <Route path="/users" exact component={Users} />
          <Route path="/*" exact component={Users} />
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
