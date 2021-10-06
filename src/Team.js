import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import requests from './Requests'
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from '@material-ui/core/Box';

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
      <Grid container spacing={2}>
          <Grid item xs={8} container
            style={{ paddingRight: "10px", display: "flex", alignContent: "center", fontSize: "40px", background: "orange" }}> 
            <h1>{teamData.teams[`${id}`].strTeam}</h1>  
          </Grid>
          <Grid item xs={2} container
            style={{ display: "flex", alignContent: "center", justifyContent: "center", fontSize: "100px", background: "orange" }}>
            <p>{teamData.teams[`${id}`].strTeamShort}</p>
          </Grid>
          <Grid container item xs={2}
            style={{ display: "flex", alignContent: "center", justifyContent: "center", fontSize: "20px", background: "orange" }}>
            <p>Formed in {teamData.teams[`${id}`].intFormedYear}</p>
          </Grid>
          <Grid item xs={8}>
            <Box m={3}>
              <Card variant="outlined">
                <Box p={4}>
                  <Box mb={4}><h2>Description</h2></Box>
                    <p>Formed in {teamData.teams[`${id}`].strDescriptionEN}</p>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button variant="contained">Go BACK</Button>
          </Grid>
        </Grid>
          
        </div>

    )
}
return (
    <h1>There's nowt here!</h1>
)
}

export default Team
