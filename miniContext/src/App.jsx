
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {

  return (
    // u can do the with main.jsx also instaed of app.jsx
    <UserContextProvider>
     <Login/>
     <div style={{  margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <Profile />
</div>

    </UserContextProvider>
  )
}

export default App
