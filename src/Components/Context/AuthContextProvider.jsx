import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase.config';

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider()

  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logOut = () => {
    signOut(auth)
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = { googleLogIn, user, logOut, githubLogIn };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
