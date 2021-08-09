import React from 'react';
import { useGoogleAuth } from './googleAuth';
import Button from 'react-bootstrap/Button';

const LogoutButton = () => {
    const { signOut } = useGoogleAuth();
   
    return (
        <Button variant="dark" onClick={signOut} >Log Out</Button>
      
      );
};

export default LogoutButton;
