import React from 'react'; 
import Template from './Template';
import NavBar from './Navbar';
import gif from '../bill-gates-linkedin.gif';


const Main = () => {
    return(
        <Template>
            <div className="Main-description">
                <h2>Meet Ahoy!, A Virtual Comment Box for Every Web Page.</h2>
            </div>
            <div className="Sub-description">
                We believe in the potential of web surfing to become something greater. Stop exploring the web alone.
                <br />
                Leave comments on interesting websites. See your friends' comments. Reply. Talk. Party. 
                <br />
                <br />
                Now availble on the <a href="https://chrome.google.com/webstore/detail/ahoy/ahepineneaniaknbpemfghfamobkhpkn?hl=en&authuser=0">Chrome Web Store.</a> 
            </div>
            <br />
            <br />
            <img src={gif} alt="loading..." className="Intro-gif"/>
            <br /> 
            <br />
            <br />


        </Template>
    );
}

export default Main; 