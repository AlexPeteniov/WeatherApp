## Testing task weather app

The goal is to create a weather app, where you can search for a city and receive the current weather for this location. The application should consist of three routes: 

- Homepage (/): it shows a search bar where user can type the name of the city and click search button
- Searchresults (/search?q=cityname): It shows all the returned results for the searchquery cityname. A lot of cities (like new york) are not unique, but are in several locations. For each city show a card with current weather, humidity, air pressure and geo coordinates. Every entry is linked to the route City. Example: https://openweathermap.org/find?q=Tiraspol
- City (/city/{id}): Should show detailed information about the weather of the current city. Example: https://openweathermap.org/city/5128581


### General Requirements: 

- Use a vue-cli setup. For config see next paragraph
- Create proper routes to which also "survive" a page reload
- To gain weather information, register at https://openweathermap.org and get an api key
- Store the Api key only in your .env file
- For Api requests: Use axios or fetch, but not directly in the component. Create a file api.js which exports functions like "getWeatherForCityname(cityName)" or "getCityById(cityId)"
- As design framework use vuetify (maybe install a vuetify plugin for vue-cli to make setup easier)
- Make small commits with meaningful names.
- Never commit broken code. 


### Setup Vue project: 
```
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, CSS Pre-processors, Linter, Unit
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? No
```
