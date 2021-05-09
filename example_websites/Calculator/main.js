$(document).ready(function(){
    $('.header').height($(window).height());
  });

function dis(val){
	document.getElementById("result").value+=val
}

function solve(){
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
}

function clr(){
    document.getElementById("result").value = ""
}

//when enter is pressed solve it