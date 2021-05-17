import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Catalogue from "./Catalogue";



const App: React.FunctionComponent<{}> = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Catalogue} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
