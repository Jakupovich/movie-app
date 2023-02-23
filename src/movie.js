import './App.css';
import Modal from 'react-modal';
import React, { useEffect, useState } from 'react';
import "./modal.css"


function Movies(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

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
          </div>
          <div className='modal-video'>
          <source src={props.movie.video} type="video/mp4"></source>
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