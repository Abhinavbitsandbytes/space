import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage/Homepage'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
         component={Homepage}
        />
      <Homepage></Homepage>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
