const lugar = require('./lugar/lugar');
const argv = require('./yargs/yarg').argv;
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El clima en ${ coords.direccion } es de ${temperatura}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })