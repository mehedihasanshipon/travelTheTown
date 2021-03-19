import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RideDetails from './components/RideDetails/RideDetails';
import Login from './components/Login/Login';

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ride/:type">
            <RideDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      // <Header />
      // <Home />
    
  );
}

export default App;
