import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './components/GoogleAuth';
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Streamer</Link>
            <div className="right menu">
                <Link to="/" className="item">All Streams</Link>
               {/* <GoogleAuth></GoogleAuth> */}
               <div className="g-signin2" data-onsuccess="onSignIn"></div>
            </div>
        </div>
    );
};


export default Header;