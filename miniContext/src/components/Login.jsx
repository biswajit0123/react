import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'
import styles from './Login.module.css'

function Login() {

    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    
    //now using useContext access userContext
    const {setUser} = useContext(UserContext);



const handleSubmit = (e) => {

    e.preventDefault()
setUser({Username,Password})


}

  return (
    <div className={styles.box}>
        <h1>Login</h1>
        <div className={styles.wrapper}>
        <input type="text" placeholder='enter your username'
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text " placeholder='enter Password' 
        value={Password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
        </div>
      
    </div>
  )
}

export default Login