/* eslint-disable */
<template>
    <v-container>
        <v-layout
            text-xs-center
            wrap
        >
            <v-flex xs12>
                <v-img
                    :src="require('../assets/openw.png')"
                    class="my-3"
                    contain
                    height="50"
                ></v-img>
            </v-flex>
            <v-flex mb-4>
                <h1 class="display-2 font-weight-bold mb-3">
                    Welcome to Weather Cloud
                </h1>
                <p class="subheading font-weight-regular">
                    Current weather and forecasts in your city
                </p>
            </v-flex>

            <v-flex xs12>
                <v-img
                    :src="require('../assets/Rain.gif')"
                    class="my-3"
                    contain
                    height="250"
                ></v-img>
            </v-flex>
            <div class="container">
                <br/>
                <div class="row justify-content-center">
                    <div class="col-12 col-md-10 col-lg-8">

                        <form class="card card-sm" @submit.prevent="saveName()">
                            <div class="card-body row no-gutters align-items-center">
                                <div class="col-auto">
                                    <i class="fas fa-search h4 text-body"></i>
                                </div>
                                <!--end of col-->
                                <div class="col">
                                    <input class="form-control form-control-lg form-control-borderless"
                                           v-model="cityName"
                                           id="userInput" type="search"
                                           placeholder="Search topics or keywords">
                                </div>
                                <!--end of col-->
                                <div class="col-auto">
                                    <button class="btn btn-lg btn-success" type="submit">Search
                                    </button>
                                </div>

                                <span id="temp-values">Min {{weatherData}}° </span><!--end of col-->
                            </div>
                        </form>
                    </div>

                    <!--end of col-->

                </div>
            </div>

        </v-layout>
    </v-container>
</template>

<script>
    import {getWeatherForCityname} from '../api.js'

    export default {

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

        methods:
            {
                saveName() {
                    getWeatherForCityname(this.cityName) // now this works, because cityName is in data
                        .then(response => {
                            this.weatherData = response.main;
                            /*this.currentTemp = response.main.temp;
                            this.minTemp = response.main.temp_min;
                            this.maxTemp = response.main.temp_max;
                            this.pressure = response.main.pressure;
                            this.humidity = response.main.humidity + '%';
                            this.wind = response.wind.speed + 'm/s';
                            this.overcast = response.weather[0].description;
                            this.icon = "images/" + response.weather[0].description + ".svg";
                            this.sunrise = new Date(response.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4);
                            this.sunset = new Date(response.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4);*/
                        });
                    this.$router.push({path: '/Search', params: {items: this.weatherData}})
                }

            },


    }

</script>

<style>
    .form-control-borderless {
        border: none;
    }

    .form-control-borderless:hover, .form-control-borderless:active, .form-control-borderless:focus {
        border: none;
        outline: none;
        box-shadow: none;
    }
</style>
