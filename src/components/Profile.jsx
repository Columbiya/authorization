import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = (props) => {
    const { email } = useParams()
    
    return (
        <div>Привет, {email}</div>
    )
}

export default Profile