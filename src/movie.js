import './App.css';
function Movies(props){
    return(
        <div className="movie-container">
          <img className='movie-image' src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path}></img>
          <div>
            <h1 className='movie-title'>{props.movie?.title}</h1>
          <p className='movie-vote'>Avrage vote: {props.movie.vote_average}</p>
          </div>
        </div>
    )
}
export default Movies