score_total = 0;
score_text = document.getElementById('score_text');
current_user_text = document.getElementById('current_user_text');
current_user = "blank";

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



cookie = document.getElementById('cookie');

cookie.addEventListener('click', function() {
    incrementScore();
});

logout_button = document.getElementById('logout_button');

logout_button.addEventListener('click', logout_user);

updateScore();
setCurrentUser();