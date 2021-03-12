import React from "react";
import Page1 from "../sections/Page1";
import Page2 from "../sections/Page2";
import Home from "../sections/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppBar from "./AppBar";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppBar theme={this.props.theme} themeToggler={this.props.themeToggler}/>
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/page1"
            render={() => <Page1 name="React Medellín" />}
          />
          <Route exact path="/page2" render={() => <Page2 />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
