import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import requests from './Requests'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



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
      <Grid container spacing={2}>
      
        <div className="TeamInfo">
        <Grid item xs={8}><h1>{teamData.teams[`${id}`].strTeam}</h1></Grid>
            
            <p>{teamData.teams[`${id}`].strTeamShort}</p>
            <p>Formed in {teamData.teams[`${id}`].intFormedYear}</p>
            <h2>Description</h2>
            <p>Formed in {teamData.teams[`${id}`].strDescriptionEN}</p>
            <Button variant="contained">Go BACK</Button>
        </div>
      </Grid>
    )
}
return (
    <h1>There's nowt here!</h1>
)
}

export default Team
