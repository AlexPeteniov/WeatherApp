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
                                <div class="col-auto">
                                    <button class="btn btn-lg btn-success" type="submit">Search
                                    </button>
                                </div>

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
    export default {

        data() {
            return {

                cityName: '',// this property is referenced by v-model="cityName" in the template
            }
        },

        methods:
            {
                saveName() {
                    this.$router.push({path: '/search', params: {cityName: this.cityName}})
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
