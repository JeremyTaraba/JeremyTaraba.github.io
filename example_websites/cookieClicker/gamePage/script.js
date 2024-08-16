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
    current_user_text.textContent = "Welcome,  " + current_user;
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