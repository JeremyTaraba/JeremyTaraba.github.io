import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


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

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


var score_total = 0;
var score_text = document.getElementById('score_text');
var current_user_text = document.getElementById('current_user_text');
var current_user = "blank";

function updateScore(){
    // get real score from database
    score_text.textContent = "Score: " + score_total;
}


function incrementScore() {
    score_total += 1;
    score_text.textContent = "Score: " + score_total;
}

function setCurrentUser() {
    current_user = sessionStorage.getItem('username'); // get username
    var username = "";
    for (let i = 0; i < current_user.length; i++) {
        if (current_user[i]== '@') { // ignore the dot at the end of email address
            break;
        }
        username += current_user[i];
      }
    current_user_text.textContent = "Welcome,  " + username;
}

function logout_user(){
    sessionStorage.removeItem('username');
    window.location.href = "../landingPage";  // Redirect to home page
}

var cookie = document.getElementById('cookie');
var logout_button = document.getElementById('logout_button');


cookie.addEventListener('click', incrementScore);
logout_button.addEventListener('click', logout_user);


updateScore();
setCurrentUser();



try {
    const docRef = await setDoc(doc(db, "users", "Ada"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    
  } catch (e) {
    console.error("Error adding document: ", e);
  }

