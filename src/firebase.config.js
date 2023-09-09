// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCajATD0O3tc5x7HuYNIROaKChV2C4gPXI",
  authDomain: "cycle-gor.firebaseapp.com",
  projectId: "cycle-gor",
  storageBucket: "cycle-gor.appspot.com",
  messagingSenderId: "126019645807",
  appId: "1:126019645807:web:65aedd369543afcd64f89a",
  measurementId: "G-TE5FFF9FLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;