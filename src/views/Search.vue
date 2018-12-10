<template>
  <div class="about">
      <div id="weather">
          <img src="assets/images/sunny.svg"> {{overcast}}
          <span class="temperature">{{currentTemp}}°</span><br>
          <span id="temp-values">Min {{minTemp}}° <br> Max {{maxTemp}}°</span>
      </div>
      <div id="info">
          <img class="icon" :src=icon> {{sunrise}}
          <img class="icon" src="assets/images/sunset.svg"> {{sunset}}
          <img class="icon" src="assets/images/humidity.svg"> {{humidity}}
          <img class="icon" src="assets/images/pressure.svg"> {{pressure}}
          <img class="icon" src="assets/images/wind.svg"> {{wind}}
      </div>
  </div>
</template>
