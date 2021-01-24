
import './App.css';
import Homepage from './components/Homepage/Homepage'
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
      </Switch>
      </BrowserRouter>
  );
}

export default App;
