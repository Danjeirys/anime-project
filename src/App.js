import { useState, useEffect } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Movie from './pages/Movie';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react'


function App() {
  const [ user, setUser ] = useState(null)

  const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading....</div>

  return (

      <main className="App">

      {
        user ? 
        <>
          <Routes>
            {/* <Route path='login' element={<LoginButton />} /> */}
            <Route path='logout' element={<LogoutButton />} />
            <Route path='profile' element={<Profile />} />
            <Route path='/movies' element={<Movie />} />
          </Routes>
        </>
        : 
          <LoginButton setUser={setUser}/>
      }
    </main>
  );
}

export default App;