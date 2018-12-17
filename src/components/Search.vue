<template>
    <div class="row">
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
    export default {
        name: 'Search',
        props: ['items'],
    };
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
