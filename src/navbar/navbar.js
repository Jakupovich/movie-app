import './navbar.css'
import mafia from "../images/mafia.jpg"
import patrol from "../images/patrol.jpg"
import vin from "../images/vin.jpg"
// ---------horizontal-navbar-menu-----------



function Navbar(){
    return(
        <div className='upperPage'>
            <nav>
                <div className='container'>
                    <div className='buttons'>
                    <p>
                        <a>Home</a>
                    </p>
                    <p>
                        <a>Popular</a>
                    </p>
                    <p>
                        <a>Lorem</a>
                    </p>
                    <p>
                        <a>Lorem</a>
                    </p>
                    </div>
                </div>
            </nav>
            <div className='content'>
                <div className='text'>
                    <h1 className='welcome-text'>Welcome to Norda Movies</h1>
                    <hr></hr>
                    <p className='big-text'>Welcome to Norda Movies. On our navigation you can choose the movies you are interested in. We offer all the latest movies, series, thrillers... We wish you a good experience on our site.</p>
                </div>
            </div>
            <div className='aboutMovies'>
            <h1 className='video-libary'>Our video library</h1>
                <div className='threeMovies'>
                    <div className='divs'>
                        <img className='divs-image' src={mafia}/>
                        <h1 className='divs-title'>Best mafia movies</h1>
                        <p className='divs-big-text'>If you are looking for good action movies, we offer you a collection of the latest action movies</p>
                    </div>
                    <div className='divs'>
                    <img className='divs-image' src={patrol}></img>
                    <h1 className='divs-title'>Best cartoons</h1>
                    <p className='divs-big-text'>If you are looking for cartoons for your little ones, we can offer you cartoons of world names</p>
                    </div>
                    <div className='divs'>
                    <img className='divs-image' src={vin}></img>
                    <h1 className='divs-title'>Favotite actors</h1>
                    <p className='divs-big-text'>if you are looking for one of your favorite actors, we offer the biggest stars of acting</p>
                    </div>
                </div>
                <h1 className='now-playing'>Now playing in movies</h1>
            </div>
        </div>
    )

}
export default Navbar;