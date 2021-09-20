
import { useState, useEffect } from 'React'
import request from './Requests'
import axios from 'axios'

const useFetch = () => {
    const url = request.allTeams
    const [team, setTeam] = useState(null)
    
    useEffect(() => {
      axios.get(url)
      .then(response => {
        setTeam(response.data)
      })
    }, [url])
}

return { team }

export default useFetch