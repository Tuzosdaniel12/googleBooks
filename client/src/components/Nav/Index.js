import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const Nav = () =>{
    function toggleBurgerMenu() {
        document.querySelector('.navbar-menu').classList.toggle('is-active');
    }
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <FontAwesomeIcon icon={faBookReader} />    
                    <span className="ml-2">Google Books</span>
                    
                </Link>
                <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleBurgerMenu}>
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" onClick={toggleBurgerMenu} to="/">
                        Search
                    </Link>
                    <Link className="navbar-item" onClick={toggleBurgerMenu} to="/saved">
                        Saved
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav