import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AdminAddMobile from "./Component/AdminAddMobile/AdminAddMobile";
import AdminPanel from "./Component/AdminPanel/AdminPanel";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import ManageMobile from "./Component/ManageMobile/ManageMobile";
import NotFound from "./Component/NotFound/NotFound";
import OrderCheckout from "./Component/OrderCheckout/OrderCheckout";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";

export const UserContext = createContext ();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={ [loggedInUser, setLoggedInUser] }>
        <Router>
            <Header />
            <Switch>
              <Route path='/home'>
                <Home />
              </Route>
              <PrivateRoute path= "/mobile/:id">
                  <OrderCheckout />
              </PrivateRoute>
              <PrivateRoute path= "/mobile/:id">
                  <OrderCheckout />
              </PrivateRoute>
              <PrivateRoute path= "/adminPanel">
                <AdminPanel />
              </PrivateRoute>
              <PrivateRoute path= "/manageMobile">
                <ManageMobile />
              </PrivateRoute>
              <PrivateRoute path="/adminAddMobile">
                <AdminAddMobile />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path= "/">
                <Home />
              </Route>
              <Route path= "*">
                <NotFound />
              </Route>
            </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
