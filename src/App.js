import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import AdminPanel from "./Component/AdminPanel/AdminPanel";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import NotFound from "./Component/NotFound/NotFound";
import OrderCheckout from "./Component/OrderCheckout/OrderCheckout";

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
              <Route path= "/product:id">
                  <OrderCheckout />
              </Route>
              {/* <Route path= "/orderedProduct">
                <OrderedProduct />
              </Route> */}
              <Route path= "/adminPanel">
                <AdminPanel />
              </Route>
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
