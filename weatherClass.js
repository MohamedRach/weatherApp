class weather{
    constructor(key){
        this.key = key;
    }
    async getLocation(location){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.key}`);
        const data = await response.json();
        const coordinates = new Map([
            ["lon",data.coord.lon],
            ["lat",data.coord.lat],
        ])
        return coordinates;
    }
    async getWeather(lat,lon){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.key}`);
        const data = await responce.json();
        const details = new Map([
            ["description",data.weather[0].description],
            ['icon',data.weather[0].icon],
            ["main",data.weather[0].main],
            ["wind",data.wind.speed],
            ["visibility",data.visibility],
            ["humidity",data.main.humidity],
            ["pressure",data.main.pressure],
            ["temp_max",data.main.temp_max],
            ['temp_min',data.main.temp_min],
            ["temp",data.main.feels_like],
            ["data",data.dt]
        ]);
        return details;
    }
}

const weather1 = new weather("345e247613d135a472de7243e9fee9e2");

