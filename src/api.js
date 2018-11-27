import axios from 'axios'
window.axios = axios;

const config= {
  apiKey: process.env.APIID,
}

export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to CryptoCurrency Converter',
        currencys: [
          {name : "USD", desc:"US Dollar"},
          {name:"EUR", desc:"Euro"},

        ],
        convertfrom:'BIT',
        convertto:'',
        amount :'',
        info:'',
        results:''
      }

    },
    filters: {
      currencydecimal (value) {
        return value.toFixed(2)
      }
    },
    mounted() {

      axios
        .get('https://api.coinmarketcap.com/v2/ticker/?convert=EUR&limit=10')
        .then(response => (this.results = response.data.data));
    }

}

