const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Address of the location',
        demand: true
    }
}).argv;

module.exports = {
    argv
}