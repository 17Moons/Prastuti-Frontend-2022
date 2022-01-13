import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './Signup_css_.css';

import Sideimg from "./images/homepage_background.png";
import login from './images/login.png';


const clientId = "836484638772-fendgimb8ee1put2vma045e99ndbgh5q.apps.googleusercontent.com";

function Signup() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
     <div className="whole">


      <div className="login-page">


            <img src={login} alt="Logo" />

        <div className="Login-button">
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
      </div>


      </div>
    );
}
export default Signup;
