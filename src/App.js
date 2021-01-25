
import './App.css';
import Homepage from './components/Homepage/Homepage';
import PageNotFound from './components/PageNotFound/PageNotFound'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
          <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
         component={Homepage}
        />
        <Route path="*"
        component={PageNotFound}
/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
