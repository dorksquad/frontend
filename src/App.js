import React from "react";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <HashRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
