  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBk2zH2nTZmwcxZ01Q50NXMshLtEytgiYM",
    authDomain: "nweb-3fb67.firebaseapp.com",
    projectId: "nweb-3fb67",
    storageBucket: "nweb-3fb67.firebasestorage.app",
    messagingSenderId: "823883040085",
    appId: "1:823883040085:web:a448c2c6b257b4ba12dbdc",
    measurementId: "G-6CKCT3J7R6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export const auth = getAuth(app);
  export const db = getFirestore(app);



