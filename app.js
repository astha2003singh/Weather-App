const apiKey="1215e9ee0f1b4773d9e8ade1dbd6ec02";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response= await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
     document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

     if(data.weather[0].main == "Clouds"){
        weatherIcon.src="weather-app-img/images/clouds.png";
     }
     else if(data.weather[0].main == "Clear"){
        weatherIcon.src="weather-app-img/images/sunny.png";
     }
     else if(data.weather[0].main == "Rain"){
        weatherIcon.src="weather-app-img/images/rain.png";
     }
          else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="weather-app-img/images/drizzle.png";
     }
          else if(data.weather[0].main == "Mist"){
        weatherIcon.src="weather-app-img/images/mist.png";
     }


}

searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})



