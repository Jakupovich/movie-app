import './navbar.css'
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
                        <a href="upcoming">Upcoming</a>
                    </p>
                    <p>
                        <a href='popular'>Popular Movies</a>
                    </p>
                    <p>
                        <a>Lorem</a>
                    </p>
                    </div>
                </div>
            </nav>
            
        </div>
    )

}
export default Navbar;