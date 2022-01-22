import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import Google_img from './images/google.svg';
// refresh token
import { refreshTokenSetup } from '../refreshToken';
import LoginImage from "./images/login.png";

const clientId =
  '836484638772-fendgimb8ee1put2vma045e99ndbgh5q.apps.googleusercontent.com';

function LoginHooks() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} :) `
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. :(`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (

    <div>
    <img src={LoginImage} className="undraw" alt='undraw' ></img>
    <button onClick={signIn} className="button">
      <img src={Google_img} alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
    </div>
  );
}

export default LoginHooks;
