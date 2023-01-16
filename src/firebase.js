import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAwUFMU6GiUwqrWy6n0lgEXiteTl5YmR0",
  authDomain: "whatsapp-mern-5356a.firebaseapp.com",
  projectId: "whatsapp-mern-5356a",
  storageBucket: "whatsapp-mern-5356a.appspot.com",
  messagingSenderId: "947206661740",
  appId: "1:947206661740:web:dda6f8130364877b435a49",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
