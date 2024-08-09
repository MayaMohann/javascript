function showweatherDetails(event) {
    event.preventDefault();  // Prevent form from submitting normally

    const city = document.getElementById('city').value;
    const apiKey = '28abc88bcc83d9ec2531b10a05e4717b';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {  // Check if the response is successful
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
        } else {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    })
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);



document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );