
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
  const app = firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.getAuth();

  function login(){
    email = document.getElementById('email');
    password = document.getElementById('password');
    auth.signInWithEmailAndPassword(email.value, password.value).then(function() {
        window.location.href = "../gamePage/index.html";
    })
    .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage, errorCode)
    });
  }
