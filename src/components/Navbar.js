import React from 'react';
import {Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <div>
            <h3><Link to="/" className="Nav-link">About</Link> <b>·</b> <Link to="/contact" className="Nav-link">Contact</Link>  <b>·</b> <Link to="/team" className="Nav-link">Team</Link> <b>·</b> <Link to="/careers" className="Nav-link">Careers</Link></h3>
        </div>
    );
}

export default NavBar; 