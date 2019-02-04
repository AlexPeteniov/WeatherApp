<template>
    <body>
    <div class="contain">
        <div class="row">
            <div class=" col-12" id="info">
                <li>
                    <v-img class="icon" :src="require('../assets/images/sunrise.svg')"></v-img>
                    {{sunrise}}
                </li>
                <li>
                    <v-img class="icon" :src="require('../assets/images/sunset.svg')"></v-img>
                    {{sunset}}
                </li>
                <li>
                    <v-img class="icon" :src="require('../assets/images/humidity.svg')"></v-img>
                    {{humidity}}
                </li>
                <li>
                    <v-img class="icon" :src="require('../assets/images/pressure.svg')"></v-img>
                    {{pressure}}
                </li>
                <li>
                    <v-img class="icon" :src="require('../assets/images/wind.svg')"></v-img>
                    {{wind}}
                </li>

            </div>
        </div>
        <div class="row">
            <div class="col-4" id="weather">
                <div v-if="804>=iconID && iconID >=801">
                    <v-img class="icon" :src="require('../assets/images/Clouds.svg')"></v-img>
                </div>
                <div v-else-if="781>=iconID &&iconID >=701">
                    <v-img class="icon" :src="require('../assets/images/Atmosphere.svg')"></v-img>
                </div>
                <div v-else-if="622>=iconID &&iconID >=600">
                    <v-img class="icon" :src="require('../assets/images/Snow.svg')"></v-img>
                </div>
                <div v-else-if="531>=iconID &&iconID >=500">
                    <v-img class="icon" :src="require('../assets/images/Rain.svg')"></v-img>
                </div>
                <div v-else-if="321>=iconID &&iconID >=300">
                    <v-img class="icon" :src="require('../assets/images/Drizzle.svg')"></v-img>
                </div>
                <div v-else-if="232>=iconID &&iconID >=200">
                    <v-img class="icon" :src="require('../assets/images/Thunderstorm.svg')"></v-img>
                </div>
                <div v-else-if="iconID ==800">
                    <v-img class="icon" :src="require('../assets/images/Clear.svg')"></v-img>
                </div>
                <br>
                <span><b>&nbsp; &nbsp;{{overcast }}</b></span><br>
            </div>
            <div class="col-4" id="temperature">
                <span class="temperature">{{ currentTemp}}<br>&nbsp;{{ cityName }}</span><br>
            </div>
        </div>
    </div>
    </body>
</template>

<script>
    import {getWeatherForCityname} from '../api.js';

    export default {

        name: 'search',
        props: ['cityName'],

        data() {
            return {

                weatherData: {},
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
                icon: '',
                iconID: ''

            }
        },

        created() {
            getWeatherForCityname(this.cityName)
                .then(response => {
                    this.weatherData = response.main;
                    this.currentTemp = response.main.temp + '°';
                    this.minTemp = 'Min' + response.main.temp_min + '°';
                    this.maxTemp = 'Max' + response.main.temp_max + '°';
                    this.pressure = response.main.pressure;
                    this.humidity = response.main.humidity + '%';
                    this.wind = response.wind.speed + 'm/s';
                    this.overcast = response.weather[0].description;
                    this.iconID = response.weather[0].id;
                    this.icon = "images/" + response.weather[0] + ".svg";
                    this.sunrise = new Date(response.sys.sunrise * 1000).toLocaleTimeString("en-GB").slice(0, 4);
                    this.sunset = new Date(response.sys.sunset * 1000).toLocaleTimeString("en-GB").slice(0, 4);
                });
        }
    };
</script>

<style>

    body {
        font-family: 'Ultra', serif;
        font-weight: 100;
        color: crimson;
    }

    span {
        text-transform: uppercase;
    }

    .contain {
        background: url(../assets/forest.gif) no-repeat;
        background-size: contain;
        position: absolute;
        width: 100%;
        height: 60%;
        top: 20%;
        left: 20%;
    }

    #weather div.v-responsive.v-image.icon {
        margin-top:170px ;
        margin-left: 50px;
        padding-left: 50px;
        font-family: 'Ultra', serif;
        text-shadow: 1px 1px 2px black;
        font-size: 20px;
        width: 100px;
        height: 90px;
    }
    #weather b{
        padding-top: 50px;
        padding-left: 50px;
        text-shadow: 3px 3px 2px black;
        font-size: 20px;
        font-family: 'Ultra', serif;
        font-weight: 300;
    }


    #temperature {
        font-family: 'Ultra', serif;
        color: crimson;
        text-shadow: 1px 1px 2px black;
        font-size: 35px;
        margin-top:170px ;
        margin-left: -40px;

    }

    #temp-values {
        text-align: right;
        text-shadow: 1px 1px 2px black;

        position: relative;
        top: -60px;
        color: crimson;
    }

    #info {
        padding-left: 35px;
        position: absolute;
        margin-bottom: 30px;
        left: 75px;
        width: 100%;
        height: 50px;

    }

    #info li {
        display: inline-block;
        font-size: 20px;
        padding: 20px;
        color: crimson;
        font-weight: bold;
        text-shadow: 1px 1px 2px black;
    }

</style>
