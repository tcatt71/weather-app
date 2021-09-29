const https = require('https');

const userInput = process.argv.slice(2);
const zipCode = userInput[0];
const countryCode = userInput[1];
const apiKey = process.env.APIKEY;

https
  .get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${apiKey}`
    , response => {
      let body = '';
      response.on('data', (data) => {
        body += data.toString();
      })
        .on('end', () => {
        let weatherCondition = JSON.parse(body);
        console.log(weatherCondition);
      });
    });


