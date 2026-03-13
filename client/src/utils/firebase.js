import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-74564.firebaseapp.com",
  projectId: "ai-interview-74564",
  storageBucket: "ai-interview-74564.firebasestorage.app",
  messagingSenderId: "350085173413",
  appId: "1:350085173413:web:bf73dd725b30eb9181fd4c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
