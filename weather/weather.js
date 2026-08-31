let url = 'http://api.weatherstack.com/current?access_key=4688319d2de60c1af5bb916e7fb406a5&query=';
async function weatherData(){    
    let city = document.querySelector('#location').value;
    let api = `http://api.weatherstack.com/current?access_key=4688319d2de60c1af5bb916e7fb406a5&query=${encodeURIComponent(city)}`;
    let p = await fetch(api);

    let data = await p.json();

    let curr_weather =  data.current.weather_descriptions[0];
    document.querySelector('#current_weather').value = curr_weather;
    let curr_temp =  data.current.temperature;
    document.querySelector('#current_temp').value = curr_temp;
    let curr_windspd =  data.current.wind_speed;
    document.querySelector('#current_windspeed').value = curr_windspd;
    let curr_dir =  data.current.wind_dir;
    document.querySelector('#current_winddir').value = curr_dir;
    let humi =  data.current.humidity;
    document.querySelector('#humidity').value = humi;
    let visi =  data.current.visibility;
    document.querySelector('#visiblity').value = visi;
    let sunr =  data.current.astro.sunrise;
    document.querySelector('#sunrise').value = sunr;
    let suns =  data.current.astro.sunset;
    document.querySelector('#sunset').value = suns;



}

let butn = document.querySelector('.get_weather');
butn.addEventListener("click",()=>{
    weatherData();
});

