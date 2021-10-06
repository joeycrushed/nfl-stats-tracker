import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import requests from './Requests'
import Button from '@mui/material/Button';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import SocialLinks from './SocialLinks';

function Team() {

    const url = requests.allTeams
    const [teamData, setTeamData] = useState(null)
    const { id } = useParams()
    const history = useHistory()
    
  useEffect(() => {
    axios.get(url)
    .then(response => {
      setTeamData(response.data)
    })
  }, [url])

 
   
    if (teamData) {
    const team = teamData.teams[id]
    return (
      <div className="TeamInfo">      
      <Grid container spacing={2}>
          <Grid item xs={8} container
            style={{ paddingRight: "10px", display: "flex", alignContent: "center", fontSize: "40px", background: "orange" }}> 
            <h1>{team.strTeam}</h1>  
          </Grid>
          <Grid item xs={2} container
            style={{ display: "flex", alignContent: "center", justifyContent: "center", fontSize: "100px", background: "orange" }}>
            <p>{team.strTeamShort}</p>
          </Grid>
          <Grid container item xs={2}
            style={{ display: "flex", alignContent: "center", justifyContent: "center", fontSize: "20px", background: "orange" }}>
            <p>Formed in {team.intFormedYear}</p>
          </Grid>
          <Grid item xs={8}>
            <Box m={3}>
              <Card variant="outlined">
                <Box p={4}>
                  <Box mb={4}><h2>Description</h2></Box>
                    <p>Formed in {team.strDescriptionEN}</p>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box m={3}>
            <SocialLinks data={teamData}/>
                </Box>
          </Grid>
          <Grid container item xs={12} justifyContent={"center"}>
            <Button style={{ background: "orange" }}onClick={history.goBack} variant="contained">Go BACK</Button>
          </Grid>
        </Grid>      
</div>

    )
}
return (
  <Container>
    <h4>Loading ...</h4>
  </Container>
    
)
}

export default Team
