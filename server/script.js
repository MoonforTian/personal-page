// message board-js
document.getElementById('submitBtn').addEventListener('click', function () {
    let username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (message === '') {
        alert('the content cannot be empty');
        return;
    }

    if (username === '') {
        username = 'guest';
    }

    // construct the data to be sent
    const data = {
        username: username,
        message: message
    };

    // send AJAX POST request to your server 
    fetch('http://localhost:3309/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // for response from the server
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

// weather api-js
async function fetchWeather() {
    // OpenWeatherMap API Key
    const apiKey = '059e33bf26149211fef180d3f7349d9d'; 
    // ID Cardiff city
    const cityId = '2653822'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.weather && data.main) {
            document.getElementById('weather').innerHTML =
                `${data.name} - ${data.weather[0].main}, temperature：${data.main.temp}°C`;
        } else {
            console.error('Upload Failed');
        }
    } catch (error) {
        console.error('weather API error', error);
    }
}

fetchWeather();
