import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';



function PopularMovies(props){
    const { movie } = props
    const [upcomming, setUpcomming] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);
    async function getUpcomming() {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f28aa71682075a83b20e0e121c7582e3&language=en-US&page=1`);
        const data = await response.json();
        setUpcomming(data.results)
    }
    useEffect(() => {
        getUpcomming()
    }, [])

    function openModal(film) {
        setIsOpen(film);
    }
    function closeModal() {
        setIsOpen(false);
    }

    return (


        <>
            <div className='content-popular'>
                <div className='text'>
                    <h1 className='welcome-text'>Popular Movies</h1>
                    <hr></hr>
                    <p className='big-text'>You can watch all the most popular movies in your region as well as in the world</p>
                </div>
                <img className="Slika"src="https://travnik-2035.netlify.app/images/bg-slider-03.webp"></img>
            </div>
        <div className='main'>
            {upcomming.map((film) => {
                return (
                    <div key={film.id}>
                        <Modal
                            isOpen={modalIsOpen === film}
                            onRequestClose={closeModal}
                        >
                            <div className='modalWrapper'>
                                <img className='movie-image-modal' src={"https://image.tmdb.org/t/p/w500/" + (film?.poster_path || "")}></img>
                                <div onClick={closeModal} class="close-container">
                                    <div class="leftright"></div>
                                    <div class="rightleft"></div>
                                    <label class="close">close</label>
                                </div>
                                <div className='movie-text-modal'>
                                    <h1 className='movie-title-modal'>{film?.title}</h1>
                                    <p><b>Date of release: </b>{film?.release_date}</p>
                                    <p className='movie-vote-modal'><b>Avrage vote: </b>{film?.vote_average}</p>
                                    <p><b>Film overview: </b>{film?.overview}</p>

                                </div>
                                <div className='modal-video'>

                                </div>
                            </div>
                        </Modal>
                        <div onClick={() => openModal(film)} className="movie-container">
                            <img className='movie-image' src={"https://image.tmdb.org/t/p/w500/" + (film?.poster_path || "")}></img>
                            <div>
                                <h1 className='movie-title'>{film?.title}</h1>
                                <p className='movie-vote'>Avrage vote: {film?.vote_average}</p>
                            </div>
                        </div>
                    </div>
                )

            })}
        </div></>

    )
}

export default PopularMovies