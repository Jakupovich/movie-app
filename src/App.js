import React, { useEffect, useState } from 'react';
import './App.css';
import Movies from './movie';
import Navbar from "./navbar/navbar"
import mafia from "./images/mafia.jpg"
import patrol from "./images/patrol.jpg"
import vin from "./images/vin.jpg"

function App() {
  const [randomState, setRandomState] = useState([]);

  async function getMovies() {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1");
      const data = await response.json();
      setRandomState(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Navbar />
      <div className='content'>
        <div className='text'>
          <h1 className='welcome-text'>Welcome to Norda Movies</h1>
          <hr></hr>
          <p className='big-text'>Welcome to Norda Movies. On our navigation you can choose the movies you are interested in. We offer all the latest movies, series, thrillers... We wish you a good experience on our site.</p>
        </div>
        <img className="Slika" src="https://travnik-2035.netlify.app/images/bg-slider-03.webp" alt="background"></img>
      </div>
      <div className='aboutMovies'>
        <h1 className='video-library'>Our video library</h1>
        <div className='threeMovies'>
          <div className='divs'>
            <img className='divs-image' src={mafia} alt="mafia"></img>
            <h1 className='divs-title'>Best mafia movies</h1>
            <p className='divs-big-text'>If you are looking for good action movies, we offer you a collection of the latest action movies</p>
          </div>
          <div className='divs'>
            <img className='divs-image' src={patrol} alt="patrol"></img>
            <h1 className='divs-title'>Best cartoons</h1>
            <p className='divs-big-text'>If you are looking for cartoons for your little ones, we can offer you cartoons of world names</p>
          </div>
          <div className='divs'>
            <img className='divs-image' src={vin} alt="vin"></img>
            <h1 className='divs-title'>Favorite actors</h1>
            <p className='divs-big-text'>If you are looking for one of your favorite actors, we offer the biggest stars of acting</p>
          </div>
        </div>
        <h1 className='now-playing'>Now playing in movies</h1>
      </div>
      <div className='main'>
        {randomState.map((movie) => (
          <Movies key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
