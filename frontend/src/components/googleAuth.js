import React from 'react'
import { useGoogleLogin } from 'react-use-googlelogin'


const GoogleAuthContext = React.createContext()

export const GoogleAuthProvider = ({ children }) => {
  const googleAuth = useGoogleLogin({
    clientId: "496312142065-mhdpimnlsj7vj5cenl5hon9b9a9j1cme.apps.googleusercontent.com", // Your clientID from Google.
  })
  
  return (
    <GoogleAuthContext.Provider value={googleAuth}>
      {children}
    </GoogleAuthContext.Provider>
  )
}

export const useGoogleAuth = () => React.useContext(GoogleAuthContext)

