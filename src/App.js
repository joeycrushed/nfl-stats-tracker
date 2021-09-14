import React from 'react';
import TeamCard from './TeamCard';
import TeamStatsScreen from './screens/TeamStatsScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/teamstatistics">
          <TeamStatsScreen />
        </Route>

        <Route path="/">
          <div className="App">
          <h1>NFL Team Stats</h1>
          <div class="teamsContainer"></div>
            <TeamCard/>
          </div>
        </Route>

      </Switch>
    </Router>
    
    
    
    
    
    )
  }
  
  export default App;
  