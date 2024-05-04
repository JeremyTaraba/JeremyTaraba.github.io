$(function () { 
    $("#datepicker").datepicker({  
        autoclose: true,  
        todayHighlight: true, 
    }).datepicker('update', new Date()); 
}); 

$("#location_form").submit(function(e) {
    e.preventDefault();
});

const delay = ms => new Promise(res => setTimeout(res, ms));

locationInput = document.getElementById('input-datalist');
cityList = document.getElementById("list-cities");
cityList.innerHTML = "";
weatherForm = document.getElementById("weather-form");
redirectLink = document.getElementById("redirectLink");

temp = [];
addCity("irvine")

document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete(({source:temp}))
}, false);


city_name = ""
url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=e0df3dbc9bda8f59a4d31245ef415996`

locationInput.addEventListener("input" , event => {
    city_name = locationInput.value;
    console.log(city_name);
   
})

weatherForm.addEventListener("submit" , event => {
    event.preventDefault();
    console.log("pressed submit");  
    if(locationInput.value != ""){
        document.location.href="showWeather/index.html";
    }
    else{
        alert("Please enter a city name");
    }

})

function addCity(city) {
    singleCity = document.createElement('option');
    singleCity.textContent = city;
    cityList.appendChild(singleCity);
}


