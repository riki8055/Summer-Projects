const API_URL = 'http://api.weatherapi.com/v1/current.json?key=3d3730b9e73b46fa8b834613211702&q=';

async function getWeather(location) {
    try {
        const { data } = await axios(API_URL + location);
        console.log(data);

        container.innerHTML = `
            <h2 id="city-name">${data.location.name} <span id="region">${(data.location.region) ? '('+data.location.region+')' : ''}</span></h2>
            <div class="content d-flex flex-wrap justify-content-center align-items-center">
                <div class="png text-center d-flex justify-content-center align-items-center">
                    <img src="${data.current.condition.icon}" alt="" style="width: 100px; height: 100px;">
                </div>
                <div class="main d-flex flex-column justify-content-center">
                    <div class="mb-2">
                        <h3 class="mb-1" id="status">${data.current.condition.text}</h3>
                        <h3 id="temp">${(container.classList.contains('std')) ? data.current.temp_c + '<sup>&#176;C</sup>' : data.current.temp_f + '<sup>&#176;F</sup>'}</h3>
                    </div>
                    <div class="mt-2">
                        <p class="lead">Humidity: ${data.current.humidity}%</p>
                        <p class="lead">Wind Speed: ${(container.classList.contains('std')) ? data.current.wind_kph + ' km/h' : data.current.wind_mph + 'mph'}</p>
                    </div>
                </div>
            </div>
            <hr>
            <small id="last-update">Last updated: ${data.current.last_updated}</small>
            `
    } catch(e) {
        container.innerHTML = `
        <div id="err">
            <h4 class="text-center">No data found for<br>"${location}"!!</h4>

        </div>
        `
    }
}