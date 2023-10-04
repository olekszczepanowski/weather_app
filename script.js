const apiKey = API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let searchBox = document.querySelector("#search-input");
let searchButton = document.querySelector("#search-button");
let weatherIcon = document.querySelector(".weather-icon");
let weatherForecast = document.querySelector(".weather-forecast");
let error = document.querySelector(".error");
async function loadWeather(city){
    const response = await fetch(apiUrl  + city + `&appid=${apiKey}`+"&units=metric");
    
    if(response.status=="404"){
        error.style.display = "flex";
        weatherForecast.style.display = "none";
    }
    
    const data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-value").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind-value").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".pressure-value").innerHTML=data.main.pressure + " hPa";
    
    if(data.weather[0].main=="Rain"){
        weatherIcon.src="icons/rainy.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="icons/sunny.png";
    }
    else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="icons/cloudy.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="icons/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="icons/mist.png";
    }

    error.style.display = "none";
    weatherForecast.style.display = "block";


}

searchButton.addEventListener("click", () => {
    loadWeather(searchBox.value);
})

