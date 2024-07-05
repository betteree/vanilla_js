const API_KEY ="0825b02287133fde685de8c7e2cee1b2";

function onGeoOk(position){
    const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=> {
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText =data.name;
        weather.innerText =data.weather[0].main;
    });
}
function onGeoError(){
    alert("날씨 못찾음");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);