import './App.css';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import "./modal.css"
import Navbar from "./navbar/navbar"


function Movies(props) {
  const { movie } = props
  const [modalIsOpen, setIsOpen] = useState(false);
  const [iframe, setIframe] = useState("")
  async function getTrailer() {
    const json = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US`
    ).catch((err) => console.log(err));
    if (json) {
      const data = await json.json();
      if (data.results) {
        const trailer = data.results.filter((video) => {
          if (video.type === "Trailer") {
            return video;
          }
        });
        return trailer;
      }
    }
  }
  async function iframeSetter() {
    const video = await getTrailer();
    setIframe("https://www.youtube.com/embed/" + video[0].key)
  }
  useEffect(() => {
    iframeSetter()
  }, [])
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <div className='modalWrapper'>
          <img className='movie-image-modal' src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path}></img>
          <div onClick={closeModal} class="close-container">
            <div class="leftright"></div>
            <div class="rightleft"></div>
            <label class="close">close</label>
          </div>
          <div className='movie-text-modal'>
            <h1 className='movie-title-modal'>{props.movie?.title}</h1>
            <p><b>Date of release: </b>{props.movie.release_date}</p>
            <p className='movie-vote-modal'><b>Avrage vote: </b>{props.movie.vote_average}</p>
            <p><b>Film overview: </b>{props.movie.overview}</p>
            <iframe className='triler' src={iframe}></iframe>
          </div>
          <div className='modal-video'>

          </div>
        </div>
      </Modal>
      <div onClick={openModal} className="movie-container">
        <img className='movie-image' src={"https://image.tmdb.org/t/p/w500/" + props.movie.poster_path}></img>
        <div>
          <h1 className='movie-title'>{props.movie?.title}</h1>
          <p className='movie-vote'>Avrage vote: {props.movie.vote_average}</p>
        </div>
      </div>
    </div>
  )
}
export default Movies