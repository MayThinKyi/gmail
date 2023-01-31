import React from 'react'
import logo from '../images/logo.png'
import { getAuth,signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import { provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../userSlice';
import { Button } from '@mui/material';
const Login = () => {
  const dispatch = useDispatch();
    const auth = getAuth();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
              const user = result.user;
              dispatch(login({
               username: user.displayName,
      email: user.email,
      image:user.photoURL
            }))
                
    
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

    }
    return (<div className='login__container'>
        <img style={{ height: '200px' }} src={logo} />
      
      <Button variant="contained"  onClick={signIn}>Login</Button>
  </div>
  )
}

export default Login