import './navbar.css'
// ---------horizontal-navbar-menu-----------



function Navbar(){
    return(
        <div className='upperPage'>
            <nav>
                <div className='container'>
                    <div className='buttons'>
                    <p>
                        <a className="nav-buttons"href='/'>Home</a>
                    </p>
                    <p>
                        <a className="btn-left nav-buttons" href="upcoming">Upcoming</a>
                    </p>
                    <p>
                        <a className="btn-left nav-buttons" href='popular'>Popular Movies</a>
                    </p>
                    </div>
                </div>
            </nav>
            
        </div>
    )

}
export default Navbar;