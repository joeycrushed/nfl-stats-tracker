import React, { useState, useEffect } from 'react'
import './TeamCard.css'
import axios from 'axios'
import requests from './Requests'

function TeamCard() {
    const url = requests.allTeams
    const [team, setTeam] = useState(null)
  
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setTeam(response.data)
    })
  }, [url])
  
  if (team) {
    return (
      <div className="teamCard__Container">
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
