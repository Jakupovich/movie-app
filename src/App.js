import './App.css';
import React, { useEffect, useState } from 'react';
import Movies from './movie';
import Navbar from "./navbar/navbar"
function App() {

  const [randomState,setRandomState]=useState([])
  
  async function getMovies(){
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1")
    const data = await response.json()
    setRandomState(data.results)
  }
  useEffect(() => {
    getMovies()
  },[]);
  return(
    <div>
      <Navbar/>
    <div className='main'>
      {randomState.map((movie)=>{
        return(
          <Movies movie={movie}/>
        )
      })}

    </div></div>
  )
}
export default App;