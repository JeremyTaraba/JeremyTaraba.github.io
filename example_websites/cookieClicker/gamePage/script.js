import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


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

async function updateScore(){
    // get real score from database
    let score = await getScore()
    if(score){
      score_total = score;
      score_text.textContent = "Score: " + score_total;
    }
    else{
      score_total = 0;
      score_text.textContent = "Score: " + score_total;
    }
    
}

function debounce(func, timeout = 1000){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const processChange = debounce(updateFirebaseScore);




function incrementScore() {
    score_total += 1;
    score_text.textContent = "Score: " + score_total;
    // updateFirebaseScore(score_total)
}



async function getScore(){
  const docRef = doc(db, "scores", sessionStorage.getItem('username'));
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().score;
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    // create a new document
    await setDoc(docRef, { score: 0 });
    
  }
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

async function updateFirebaseScore(score){
  // update firebase score
  console.log(`update firebase score: ${score}`);
  await setDoc(doc(db, "scores", current_user), { score: score });  // update the user's score in Firestore
}

var cookie = document.getElementById('cookie');
var logout_button = document.getElementById('logout_button');


cookie.addEventListener('click', incrementScore);
logout_button.addEventListener('click', logout_user);

cookie.addEventListener('click', () => processChange(score_total));

var scoreboard = document.getElementById('high_scores_list');

async function getScoreboard(){
  scoreboard.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "scores"));
  var sortedScores = [];
  querySnapshot.forEach((doc) => {
    sortedScores.push({id: doc.id, score: doc.data()["score"]});
  });


  //TODO: They have most of it, just not the sorting scores part.
  //TODO: after that they have to update the scoreboard whenever a user enters a new score
  //TODO: once they are done, have them make a new user and test everything out 

  sortedScores.sort((a, b) => b.score - a.score);
  for(let i = 0; i < sortedScores.length && i < 5; i++){
    scoreboard.innerHTML += `<li><div class="high_scores_text">${i+1}. ${sortedScores[i].id.split('@')[0]}</div><div>${sortedScores[i].score}</div></li>`
  }

  
}

await getScoreboard();

updateScore();
setCurrentUser();



