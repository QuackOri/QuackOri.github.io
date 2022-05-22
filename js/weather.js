const API_KEY = '8c9c572d1133bc8a6509d1ef479836e4';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector('#weather span');
            city.innerText = data.name;
            
            const weatherIcon = data.weather[0].icon;
            const iconImg = document.createElement('img');
            iconImg.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            document.querySelector('#weather').appendChild(iconImg);
        }
    );
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);