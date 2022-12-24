import { useState, useEffect } from 'react'
import Form from "../components/Form";
import MovieDisplay from "../components/MovieDisplay";



function Movie() {
  const [movie, setMovie] = useState(null);
  // const [user, setUser] = useState(getUser())

  const apiKey = "b474ca3b";

  //fucntion to getMovies
  const getMovie = async (searchTerm) => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      //parse JSON response into js object
      const data = await response.json();

      //set the Movie state to the movie
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default Movie;
