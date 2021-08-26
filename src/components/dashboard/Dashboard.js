import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getQuestions } from "../../actions";

import HeaderMenu from "./HeaderMenu";
import MainPage from "./MainPage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import PageNotFound from "./PageNotFound";
import Question from "./Question";

const Dashboard = ({ getQuestions }) => {
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);
  return (
    <div className="ui container left aligned">
      <Route component={HeaderMenu} />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/questions/:id" component={Question} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
};

export default connect(null, { getQuestions })(Dashboard);
