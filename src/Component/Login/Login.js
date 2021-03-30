import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { firebaseConfig } from './firebase.config';
import facebook from './Icon/fb.png';
import google from './Icon/google.png';
import './Login.css';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }
      // google provider function
  const handelGoogleSignIn= () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  
    firebase
    .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const {displayName , email} = result.user;
        const signedInUser ={ name: displayName, email : email}
        setLoggedInUser  (signedInUser);
        history.replace(from)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  }

  // facebook provider function
const handelFacebookSignIn = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();

  firebase
  .auth()
    .signInWithPopup(facebookProvider)
    .then((result) => {
      const {displayName , email} = result.user;
      const signedInUser ={ name: displayName, email : email}
      setLoggedInUser  (signedInUser);
      history.replace(from);
   })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
  });
}
    return (
        <div>
            <div className="icon" onClick={handelGoogleSignIn}>
                      <img src={google} alt="" />
                      <span>Continue with Google</span>
                  </div>

                               {/* facebook sign in */}
                  <div className="icon" onClick={handelFacebookSignIn}>
                      <img src={facebook} alt="" />
                      <span>Continue with Facebook</span>
                  </div>
        </div>
    );
};

export default Login;