import React, { useState, useEffect } from 'react'
import './TeamCard.css'
import axios from 'axios'

function TeamCard() {
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
          {team.teams.map(nfl =>
          <div className="teamCard">
                <h4>{nfl.strTeam}</h4>
                <img src={nfl.strTeamBadge} alt="" />            
          </div> 
          )}
        
      </div>
    
    )
  }
  
    return (
      <div >  
      <p>it's not working</p>
      </div>
    );
}

export default TeamCard
