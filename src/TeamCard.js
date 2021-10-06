import React, { useState, useEffect } from 'react'
import './TeamCard.css'
import axios from 'axios'
import requests from './Requests'
import { Link } from "react-router-dom"


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
      <div className="teamCard__Container" >
          {team.teams.map((nfl, index) =>
            <Link to={`/teams/${index}`}>
          <div key={nfl.idTeam} className="teamCard">     
                <h4>{nfl.strTeam}</h4>
                <img src={nfl.strTeamBadge} alt="" />
          </div> 
          </Link>   
          )}
            
      </div>
      
    )
  }
  
    return (
      <div >  
      <p>Failed to load</p>
      </div>
    );
}

export default TeamCard
