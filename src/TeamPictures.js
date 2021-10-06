import React from 'react'
import { useParams } from 'react-router-dom'
import Box from '@material-ui/core/Box'
import './App.css'

function TeamPictures(props) {
    const { id } = useParams()
    const team = props.data.teams[id]

    return (
        <div className="teamJersey">
            <Box p={2}><img src={team.strTeamJersey} alt="" /></Box>
        </div>
    )
}

export default TeamPictures
