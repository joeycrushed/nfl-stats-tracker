import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Team from './Team';

function App() {

  return (
    <Router>
      <Switch>

        <Route path="/" exact >
          <div className="App">
          <h1>NFL Team Stats</h1>
            <div className="teamCard__Container">
                <TeamCard/>
            </div>
          </div>
        </Route>

        <Route path="/teams/:id" exact>
          <Team />
        </Route>

      </Switch>
    </Router>
  )
}
  export default App;
  