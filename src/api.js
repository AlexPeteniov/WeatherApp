import axios from 'axios'
window.axios = axios;

const baseURL = "https://openweathermap.com/api";
const httpRequester = axios.create({
  baseURL
});

export function getWeatherForCityname(cityName) {
  const requestConfig = {
    method: 'get',
    url: `city/${cityName}`,
    headers: {
      apiKey: a4fecf182bf752df2d988d2cde817b94
    }
  }
  return httpRequester(requestConfig)
    .then(result => result.data)
}
