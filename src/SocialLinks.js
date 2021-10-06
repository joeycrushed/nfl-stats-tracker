import React from 'react'
import { useParams } from 'react-router'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'


function SocialLinks(props) {
    const { id } = useParams()
    const team = props.data.teams[id]

    return (
        <div>
            <Card variant="outlined">
                <Box p={4}>
                  <a href={`https://` + team.strTwitter}
                    target='_blank'
                    rel="noopener noreferrer">
                      <p>{team.strTwitter}</p>
                </a>
                <a href={`https://` + team.strFacebook}
                    target='_blank'
                    rel="noopener noreferrer">
                      <p>{team.strFacebook}</p>
                </a>
                <a href={`https://` + team.strInstagram}
                    target='_blank'
                    rel="noopener noreferrer">
                      <p>{team.strInstagram}</p>
                </a>
                </Box>
            </Card>
        </div>
    )
}

export default SocialLinks
