const apikey = "cebc33aa4eb06d238ce7784ca3c23fae";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&q=";
const searchbox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");
const weathericon = document.querySelector(".weather-icon"); 



async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}` + `&units=metric`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather-1").style.display="none";
 

    }
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temprature").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humid").innerHTML=data.main.humidity + '%';
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main="clouds"){
        weathericon.src = "clouds.png";
    }
    
    else if(data.weather[0].main="clear"){
        weathericon.src = "clear.png";
    }

    else if(data.weather[0].main="rain"){
        weathericon.src = "rain.png";
    }

    else if(data.weather[0].main="Drizzle"){
        weathericon.src = "drizzle.png";
    }

    else if(data.weather[0].main="mist"){
        weathericon.src = "mist.png";
    }

    else if(data.weather[0].main="snow"){
        weathericon.src = "snow.png";
    }
    document.querySelector(".weather-1").style.display="block";
    document.querySelector(".error").style.display="none";
 
}
checkweather();

   searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})