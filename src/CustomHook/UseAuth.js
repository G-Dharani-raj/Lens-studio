import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../FireBase/firebase";

const UseAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setuserDetails] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        setCurrentUser(user);
        getDoc(userRef)
          .then((res) => {
            setuserDetails(res.data());
            localStorage.setItem('admin', res.data().isAdmin) 
            console.log(res.data().isAdmin);
          })
          .catch((err) => console.log(err));
      } else {
        setCurrentUser(null);
        setuserDetails(null);
      }
    });

    return unsubscribe;
  }, []);

  return { currentUser, userDetails };
};

export default UseAuth;