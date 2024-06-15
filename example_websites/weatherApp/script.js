$(function () { 
    $("#datepicker").datepicker({  
        autoclose: true,  
        todayHighlight: true, 
    }).datepicker('update', new Date()); 
}); 

$("#location_form").submit(function(e) {
    e.preventDefault();
});

var a = "something";
localStorage.setItem('a', a);

const delay = ms => new Promise(res => setTimeout(res, ms));

locationInput = document.getElementById('input-datalist');
cityList = document.getElementById("list-cities");
cityList.innerHTML = "";
weatherForm = document.getElementById("weather-form");
redirectLink = document.getElementById("redirectLink");

var latitude = 0;
var longitude = 0;

var global= {
    "x": 1,
};

localStorage.setItem('global', JSON.stringify(global));

temp = [];


document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete(({source:temp}))
}, false);


city_name = ""

locationInput.addEventListener("input" , async event => {
    city_name = locationInput.value;
    cityList.innerHTML = "";
    url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=e0df3dbc9bda8f59a4d31245ef415996`
    data = await getApiData(url);
    var fullName = "";
    for (var i = 0; i < data.length; i++) {
        fullName += data[i]["name"];
        fullName += ", ";
        fullName += data[i]["country"];
        fullName += ", ";
        fullName += data[i]["state"];
        addCity(fullName);
        fullName = "";
    }


})

async function onInput2(){
    url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=e0df3dbc9bda8f59a4d31245ef415996`
    data = await getApiData(url);
    latitude = data[0]["lat"]
    longitude = data[0]["lon"]
}



function getApiData(urlName){
    return fetch(urlName)
    .then(res => res.json())
    .catch(err => { throw err });
}


var weatherData = {};

async function getWeatherData(){
    weatherURL = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=2024-05-15&end_date=2024-05-15&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&timezone=auto`;
    weatherData = await getApiData(weatherURL);
    
}




weatherForm.addEventListener("submit" , async event => {
    event.preventDefault();
    if(locationInput.value != ""){
        await onInput2();
        await getWeatherData();
        
        document.location.href="search.html";

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


