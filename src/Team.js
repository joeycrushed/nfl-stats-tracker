import React from 'react'
import { useParams } from 'react-router-dom'

function Team() {
    const {id} = useParams()

    return (
        <div>
            <h1>Team Page: {id} </h1>
        </div>
    )
}

export default Team
