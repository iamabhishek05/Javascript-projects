
const API_KEY = ""
const URL = "https://api.openweathermap.org/data/2.5/weather?q="

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function getWeather(city) {
    try {
        const response = await fetch(URL + city + `&appid=${API_KEY}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }

        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }

        if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }

        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/Mist.png";
        }





    } catch (error) {
        console.error("Error:", error);
    }
}

searchButton.addEventListener("click", () => {
    const city = searchInput.value.trim();
    if (city) {
        getWeather(city);
    }
});

