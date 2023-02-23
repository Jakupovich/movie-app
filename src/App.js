import './App.css';
import React, { useEffect, useState } from 'react';
import Movies from './movie';

function App() {
  const [randomState,setRandomState]=useState([])

  async function getMovies(){
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1")
    const data = await response.json()
    setRandomState(data.results)
    const vidResponse = await fetch(
      `https://api.themoviedb.org/3/movie/videos?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US`
    );
    const vidData = await vidResponse.json();
      console.log(vidData)
  }
  
  
  useEffect(() => {
    getMovies()
  },[]);
  return(
    <div className='main'>  
      {randomState.map((movie)=>{
        return(
          <Movies movie={movie}/>
        )
      })}
    </div>
  )
}
export default App;