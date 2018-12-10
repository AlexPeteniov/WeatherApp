import axios from 'axios'

window.axios = axios;

const baseURL = 'https://openweathermap.com/api';
const httpRequester = axios.create({
    baseURL
});

export function getWeatherForCityname(cityName) {
    const requestConfig = {
        method: 'get',
        url: (`http://api.openweathermap.org/data/2.5/weather?lat=${cityName}&appid=a4fecf182bf752df2d988d2cde817b94&units=metric`),
        headers: {
            apiKey: 'a4fecf182bf752df2d988d2cde817b94'
        }
    };
    return httpRequester(requestConfig)
        .then(result => result.data)
}
