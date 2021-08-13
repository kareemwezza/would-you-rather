import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HeaderMenu from "./HeaderMenu";
import MainPage from "./MainPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import Question from "./Question";

const Dashboard = (props) => {
  return (
    <div className="ui container left aligned">
      <Route component={HeaderMenu} />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/leader-board" component={LeaderBoard} />
        <Route path="/new-question" component={NewQuestion} />
        <Route path="/question/:id" component={Question} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default Dashboard;
