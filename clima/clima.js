const axios = require('axios');

const getClima = async(lat, lng) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=762501fc64fe7bc8f458b4b1be278cef`;
    const respuesta = await axios.get(url);
    return respuesta.data.main.temp;
}

module.exports = {
    getClima
}