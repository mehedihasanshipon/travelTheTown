import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RideDetails from "./components/RideDetails/RideDetails";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import Blog from "./components/Blog/Blog";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/ride/:type">
            <RideDetails />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/blog">
            <Blog />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
