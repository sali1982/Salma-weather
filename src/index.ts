import express from 'express';
import Weather from './weatherRes'; 

const swaggerUi = require('swagger-ui-express');
import {swaggerDocument} from './swagger';

const axios = require('axios');
const app = express();
const port = 3000; 

const haveFunMessage = (temp: number) =>{
    if(temp >20 ) {
        return `Nice Weather have fun in ${temp} Celsius and no coding for today!`;
    } else {
        return `Get a cup of coffee and enjoy coding in this weather: ${temp} Celsius!`;
    }
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req: any, res) => {
    return res.send('Do you want to see the weather? then go to the localhost:3000/weather/[Name of your city]');

  }); 

  app.get('/weather', (req: any, res) => {
    return res.send('Please enter the name of your city man!');
  });

  app.get('/weather/:city', (req: any, res: any) => {
    axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=1abbc56a04039e33f33cc542b226ab1a&units=Metric`)
        .then((response: Weather) => {
            const temp = response.data.main.temp; 
            const city = response.data.name;  
            return res.status(200).json({message:haveFunMessage(temp), temp: temp, city: city });
            })
        .catch(() => {
            return res.status(500).json({message: 'Sorry try another city', temp: null, city: req.params.city});
         });
  });

app.listen(port, () =>
  console.log(`App listening on port 3000!`)
);