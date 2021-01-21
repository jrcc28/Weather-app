const { argv } = require('./config/yargs');
const { getPlaceLonLat } = require('./place-weather/place')
const { getWeather } = require('./place-weather/weather')

// getPlaceLonLat(argv.address)
//     .then(resp => {
//         console.log(resp);
//     }).catch(err => {
//         console.log(err);
//     })



const getInfo = async(address) => {
    try {

        const data = await getPlaceLonLat(address);
        const result = await getWeather(data.lat, data.lng);
        return `The weather in ${data.name} is ${result}`;
    } catch (error) {
        return `Can't find weather in ${address}`;

    }

    // return new Promise((resolve, reject) => {
    //     let data;
    // getPlaceLonLat(address)
    //     .then(resp => {
    //         return resp;
    //     }).then(data => {
    //         getWeather(data.lat, data.lng)
    //             .then(resp => resolve(`The weather in ${data.name} is ${resp}`))
    //             .catch(err => reject(`Can't find weather in ${data.name}`));
    //     })
    //     .catch(err => reject(`Can't find weather in ${address}`))
    // })
}

getInfo(argv.address)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));