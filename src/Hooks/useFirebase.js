import initilizeAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initilizeAuthentication();

const useFirebase = () => {
  const [users, setUsers] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");

  const auth = getAuth();
  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUsers("");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //registr
  const handleEmailPasswordRegister = (email, password, name) => {
    setName(name);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleNameCapture = () => {
    updateProfile(auth.currentUser, { displayName: name }).then(() => {
      console.log("name captured");
    });
  };

  //login
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  return {
    googleSignIn,
    logOut,
    users,
    setUsers,
    handleEmailPasswordRegister,
    handleLogin,
    handleNameCapture,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
