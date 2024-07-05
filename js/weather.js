const API_KEY = "0825b02287133fde685de8c7e2cee1b2";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // API 응답을 콘솔에 출력하여 확인

            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].description} / ${data.main.temp}°C`; // weather[0].description을 사용하여 한국어로 된 설명 출력
        });
}

function onGeoError() {
    alert("날씨를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
