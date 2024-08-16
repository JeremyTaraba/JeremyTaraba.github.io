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