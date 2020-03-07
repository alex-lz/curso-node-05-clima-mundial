const argv = require('./config/yargs').argv;
const axios = require('axios')

const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Ottawa',
    headers: {'x-rapidapi-key': '978911236amsh9b53d425be0f9fap106dd0jsn1482829ab4d2'}
});

instance.get()
        .then( resp => console.log(resp.data) )
        .catch( err => console.log('Error!!!', err))

console.log( argv.d)

// node app -d Culiacan
// node app --help