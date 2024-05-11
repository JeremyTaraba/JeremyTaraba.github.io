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

function getApiData(urlName){
    return fetch(urlName)
    .then(res => res.json())
    .catch(err => { throw err });
}





weatherForm.addEventListener("submit" , event => {
    event.preventDefault();
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


