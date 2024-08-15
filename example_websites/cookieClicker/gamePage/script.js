score_total = 0;
score_text = document.getElementById('score_text');
current_user_text = document.getElementById('current_user_text');
current_user = "";

function updateScore(){
    // get real score from database
    score_text.textContent = "Score: " + score_total;
}


function incrementScore() {
    score_total += 1;
    score_text.textContent = "Score: " + score_total;
}

function setCurrentUser() {
    current_user = "blank"; // get user from database
    current_user_text.textContent = "Welcome,  " + current_user;
}



cookie = document.getElementById('cookie');

cookie.addEventListener('click', function() {
    incrementScore();
});

updateScore();
setCurrentUser();