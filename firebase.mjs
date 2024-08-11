  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import {getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAHGDb4o7pJZw3eOugSaVCEFiTtzKd7viI",
    authDomain: "class-1-39b59.firebaseapp.com",
    projectId: "class-1-39b59",
    storageBucket: "class-1-39b59.appspot.com",
    messagingSenderId: "401024482096",
    appId: "1:401024482096:web:f7825fe42b48fa9f2326f5",
    measurementId: "G-VQ1ZJX20NL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export{
    auth,
    app
  };
