import React from 'react';
import TeamCard from './TeamCard';
import './App.css'

function App() {
  return (
    <div className="App">
    <h1>NFL Team Stats</h1>
      <div class="teamsContainer">
        <TeamCard />
      </div>
    </div>
  )
}

export default App;
