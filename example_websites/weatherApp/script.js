$(function () { 
    $("#datepicker").datepicker({  
        autoclose: true,  
        todayHighlight: true, 
    }).datepicker('update', new Date()); 
}); 

$("#location_form").submit(function(e) {
    e.preventDefault();
});

locationInput = document.getElementById('input-datalist');
cityList = document.getElementById("list-cities");
cityList.innerHTML = "";

temp = [];
addCity("irvine")

document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete(({source:temp}))
}, false);


city_name = ""
url = `https://api.openweathermap.org/geo/1.0/direct?q=${city_name}&limit=5&appid=e0df3dbc9bda8f59a4d31245ef415996`

locationInput.addEventListener("input" , event => {
    //event.preventDefault();
    city_name = locationInput.value;
    console.log(city_name);
})

// locationInput.addEventListener("submit" , event => {
//     event.preventDefault();
    
// })

function addCity(city) {
    singleCity = document.createElement('option');
    singleCity.textContent = city;
    cityList.appendChild(singleCity);
}