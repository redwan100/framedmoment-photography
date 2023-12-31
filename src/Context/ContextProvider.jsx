import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
// import axios from "axios";
// CREATE CONTEXT
export const AuthContext = createContext();

// CREATE AUTH
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name, photoUrl) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);

      if (loggedUser) {
        axios
          .post("https://framedmoments.vercel.app/jwt", {
            email: loggedUser.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem("access-token", data.data.token);
            }
          });
      } else {
        localStorage.removeItem("access-token");
      }

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    userSignIn,
    logOut,
    loading,
    googleSignIn,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default ContextProvider;
