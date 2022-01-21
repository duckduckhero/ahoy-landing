import React from 'react'; 
import { Link } from 'react-router-dom';
import Template from './Template';

const Contact = () => {
    return(
        <Template>
            For any business related inquiries, email deokhaeng.lee@duke.edu!
            <br />
            Or you can DM us at our official instagram account <a href="https://www.instagram.com/ahoy_app/">@ahoy_app</a>.
        </Template>
    );
}

export default Contact; 