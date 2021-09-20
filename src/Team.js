import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import requests from './Requests'


function Team() {
    const url = requests.allTeams
    const [teamData, setTeamData] = useState(null)
    const { id } = useParams()

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setTeamData(response.data)
    })
  }, [url])
   
    if (teamData) {
    return (
        <div className="TeamInfo">
            <h1>{teamData.teams[`${id}`].strTeam}</h1>
            <p>{teamData.teams[`${id}`].strTeamShort}</p>
            <p>Formed in {teamData.teams[`${id}`].intFormedYear}</p>
            <h2>Description</h2>
            <p>Formed in {teamData.teams[`${id}`].strDescriptionEN}</p>
            <button>Go Back</button>
        </div>
    )
}
return (
    <h1>There's nowt here!</h1>
)
}

export default Team
