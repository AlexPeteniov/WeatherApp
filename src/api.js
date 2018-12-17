/* eslint-disable */
import axios from 'axios'
window.axios = axios
const baseURL = "http://api.openweathermap.org/data/2.5/"

const httpRequester = axios.create({
    baseURL
});

export function getWeatherForCityname(cityName) {
    const requestConfig = {
        method: 'get',
        url: `weather?q=${cityName}&appid=a4fecf182bf752df2d988d2cde817b94&units=metric`,

    };
    return httpRequester(requestConfig)
        .then(result => result.data)
}