<template>
    <div class="row">
        <router-view></router-view>
        <div id="weather">
            <v-img :src="require('../assets/images/vue-weather.svg')"></v-img>
            {{overcast}}
            <span class="temperature">{{currentTemp}}°</span><br>
            <span id="temp-values">Min {{minTemp}}° <br> Max {{maxTemp}}°</span>
        </div>
        <div id="info">
            <v-img class="icon" :src="require('../assets/images/sunrise.svg')"></v-img>
            {{sunrise}}
            <v-img class="icon" :src="require('../assets/images/sunset.svg')"></v-img>
            {{sunset}}
            <v-img class="icon" :src="require('../assets/images/humidity.svg')"></v-img>
            {{humidity}}
            <v-img class="icon" :src="require('../assets/images/pressure.svg')"></v-img>
            {{pressure}}
            <v-img class="icon" :src="require('../assets/images/wind.svg')"></v-img>
            {{wind}}
        </div>
    </div>
</template>

<script>
    import {getWeatherForCityname} from '../api.js';
    import HelloWorld from './HelloWorld.vue';
    export default {

        name:'Search',
        props:['cityName'],

        data() {
            return {

                weatherData: {},// add all your data attributes here which you want to refrence with this.bla
                cityName: '',// this property is referenced by v-model="cityName" in the template
                currentTemp: '',
                maxTemp: '',
                minTemp: '',
                sunrise: '',
                sunset: '',
                pressure: '',
                humidity: '',
                wind: '',
                overcast: '',
                weather: '',
                icon: ''

            }
        },

        created () {
                    getWeatherForCityname(this.cityName) // now this works, because cityName is in data
                        .then(response => {
                            this.weatherData = response.main;
                            this.currentTemp = response.main.temp;
                            this.minTemp = response.main.temp_min;
                            this.maxTemp = response.main.temp_max;
                            this.pressure = response.main.pressure;
                            this.humidity = response.main.humidity + '%';
                            this.wind = response.wind.speed + 'm/s';
                            this.overcast = response.weather[0].description;
                            this.icon = "images/" + response.weather[0].description + ".svg";
                            this.sunrise = new Date(response.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4);
                            this.sunset = new Date(response.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4);
                        });
        }};
</script>

<style>


    .row {

        width: 520px;
        height: 170px;

        position: absolute;
        top: 35%;
        left: 35%;
    }

    #weather {
        padding: 15px;
        vertical-align: middle;
    }

    .temperature {
        font-family: 'Vast Shadow', cursive;
        font-size: 40px;
        vertical-align: top;
        position: absolute;
        left: 80px;
    }

    #temp-values {
        text-align: right;
        text-justify: distribute;
        display: block;
        position: relative;
        top: -60px;
    }

    #info {
        padding-left: 20px;
        position: relative;
        top: -20px;
    }

    .icon {
        position: inherit;
        top: 2px;
        padding-left: 8px;
    }
</style>
