/**
 * Service to get latitude and longitude of place
 * Seems that this url do the same thing of the url in weather.js
 * For practical issues place.js only get lat and lon.
 */
const axios = require('axios');

const getPlaceLonLat = async(address) => {
    const encodedUrl = encodeURI(address); // encode

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: {
            "x-rapidapi-key": "fb5279ff27msh1646d8ea6019e9cp10c0d8jsn6bb6f5c064a4"
        }
    });

    const resp = await instance.get();
    // .then(resp => console.log(resp.data.coord))
    // .then(resp => console.log(resp.data))
    //     .catch(err => console.log(err));

    if (resp.data.length === 0)
        throw new Error(`No results for ${address}`);

    const data = resp.data;
    const name = data.name
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        lat,
        lng,
        name
    }
}

module.exports = {
    getPlaceLonLat
}