import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const url = "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391"
  const [team, setTeam] = useState(null)

useEffect(() => {
  axios.get(url)
  .then(response => {
    setTeam(response.data)
  })
}, [url])

if (team) {
  return (
    <div>
      <h1>NFL Teams</h1>
      <ul>
        {team.teams.map(nfl =>
          <li>{nfl.strTeam}</li>
        )}
      </ul>
    </div>
  
  )
}

  return (
    <div >  
    <p>it's not working</p>
    </div>
  );
}

export default App;
