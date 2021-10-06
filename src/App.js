import React from 'react';
import TeamCard from './TeamCard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'
import TeamInfo from './TeamInfo';

function App() {

  return (
    <Router>
      <Switch>

        <Route path="/" exact >
          <div className="App">
          <img src="https://assets.stickpng.com/images/5895deb9cba9841eabab6099.png" style={{height: "100px" }}alt="" />
            <div className="teamCard__Container">
                <TeamCard/>
            </div>
          </div>
        </Route>

        <Route path="/teams/:id" exact>
          <TeamInfo />
        </Route>

      </Switch>
    </Router>
  )
}
  export default App;
  