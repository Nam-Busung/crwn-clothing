import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzsvm2hb_widDOsqguww-5pkcFwFPdb8M",
  authDomain: "crwn-clothin-db-62990.firebaseapp.com",
  projectId: "crwn-clothin-db-62990",
  storageBucket: "crwn-clothin-db-62990.appspot.com",
  messagingSenderId: "658260968488",
  appId: "1:658260968488:web:863a7f67f6c5c5c593a11d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth: any) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnampshot = await getDoc(userDocRef);
  console.log(userSnampshot);
  console.log(userSnampshot.exists());

  if (!userSnampshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error: any) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};
