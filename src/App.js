import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Person from "./Person";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={Welcome} exact />
            <Route path="/person/:name" component={Person} exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
