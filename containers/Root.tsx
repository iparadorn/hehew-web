import React, { PureComponent } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { appStore } from "../store";

import AppError from "./AppError/AppError";
import Options from "./Options/Options";


//// Component ///////
export default class Root extends PureComponent {
  render() {
    return (
      <Provider store={appStore.store} key="provider">
        <HashRouter>
          <Switch>
             <Route path="/" component={Options} />
             <Route path="/options" component={Options} />           
          </Switch>
        </HashRouter>
        <AppError />
      </Provider>
    );
  }
}
