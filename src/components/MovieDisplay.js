export default function  MovieDisplay ({ movie }) {
    const loaded = () => {
        return (
            <>
            <h1>{movie.Title}</h1>
            <h2>Genre: {movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>About: {movie.Plot}</h2>
            <h2>Awards: {movie.Awards}</h2>
            <h2>Released: {movie.Year} </h2>
            <h2>Director: {movie.Director}</h2>
            <h2>Cast: {movie.Actors}</h2>
            <h2>Runtime: {movie.Runtime}</h2>
            </>
        )
    }

    const loading = () => {
        return <h1>No Movie to Display</h1>
    }

    return movie ? loaded() : loading()
};
