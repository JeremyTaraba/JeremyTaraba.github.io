import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANEFOuK92IBNEVcIVGW9LfAJsiBWG6sog",
    authDomain: "cookieclicker-72b05.firebaseapp.com",
    projectId: "cookieclicker-72b05",
    storageBucket: "cookieclicker-72b05.appspot.com",
    messagingSenderId: "766996351721",
    appId: "1:766996351721:web:05e35fc69cdd19d434fe78",
    measurementId: "G-24ZMJNCH1R"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth();

  var login_button = document.getElementById('login_button');

  login_button.addEventListener('click', login);

  async function login(){
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    signInWithEmailAndPassword(auth, email.value, password.value).then(function() {
        window.location.href = "../gamePage";
    })
    .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode)
    });
  }
