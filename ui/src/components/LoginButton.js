import React from 'react';
import { useGoogleAuth } from './googleAuth';

const LoginButton = () => {

    const { signIn } = useGoogleAuth();

    return (
        
        <button><img src="https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png" alt="my login icon" onClick={signIn} /></button>

      );
};

export default LoginButton;
