/**
 * Service te get weather of a place receive lat and lng of that place.
 */
const axios = require('axios')

const getWeather = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=955d28d21fe6241a6c33e1c3fb4112d1&units=metric`);
    // console.log(resp);
    return resp.data.main.temp;
}

module.exports = {
    getWeather
}