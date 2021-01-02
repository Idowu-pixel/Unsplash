import React, { useContext } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { Context } from "./Context";
import Banner from "./Banner";

function App() {
  const { currentUser } = useContext(Context);

  return (
    <div className="app">
      <div className="app__container">
        <Switch>
          <Route exact path="/">
            {currentUser ? <Home /> : <Login />}
          </Route>
          <Route path="/search">
            <Banner />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
