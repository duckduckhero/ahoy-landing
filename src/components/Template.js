import React from 'react';
import banner from '../ahoy-banner.png'; 
import NavBar from './Navbar';


const Template = ({children}) => {
    return(
        <div>
             <br />
            <br />
            <img src={banner} className="Banner-logo" alt="logo" />
            <br />
            <NavBar />
            <br />
            {children}
        </div>  
    );
}

export default Template; 