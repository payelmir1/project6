const getweather = () => {

    const city = document.getElementById('cityInput').value;
    const apiKey = '855e8a3212e93f2a61b717be0f844a53';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        
        const weatherInfo = document.getElementById('weatherInfo');
        
        const description = data.weather[0].description;
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const windspeed = data.wind.speed;


       weatherInfo.innerHTML= `
          
          <p>Description: ${description}</p>
          <h4>Temperature: ${temperature} &#8451</h4>
          <p>Humidity: ${humidity} %</p>
          <p>Wind Speed: ${windspeed} m/s</p>
        
       `
        
    })
    .catch(error => {

        console.error('Opps!, Sorry', error);
        document.getElementById('weatherInfo').innerText ='City Not Found';
        

    })
    
}