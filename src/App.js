import { useState, useEffect } from 'react'
import './App.css';
import MovieDisplay from './components/MovieDisplay';
import Form from './components/Form';
// import { useState } from 'react'
import NewOrderPage from './pages/newOrderPage';
import AuthPage from './pages/AuthPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'
import { getUser } from './utilities/users-service';

function App() {
  const [movie, setMovie, user, setUser] = useState(null, getUser())
  // const [user, setUser] = useState(getUser())

  const apiKey = 'b474ca3b'

  //fucntion to getMovies
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
      //parse JSON response into js object
    const data = await response.json()

    //set the Movie state to the movie
    setMovie(data)
    } catch (err) {
      console.log (err)
    }
  }

  useEffect (() => {
    getMovie('Clueless')
  }, [])

  return (
    <div className="App">
      <Form getMovie={getMovie}/>
      <MovieDisplay movie={movie}/>

      <main className="App">

      {
        user ? 
        <>
          <NavBar name={user.name} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        : 
          <AuthPage setUser={setUser} />
      }
    </main>
    </div>
  );
}

export default App;