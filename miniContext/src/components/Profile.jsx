import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
const {User}  = useContext(UserContext)

if(!User) return <h1>hey log in man </h1> 
  return (
<h1>Welcome {User.Username}</h1>
  )
}

export default Profile