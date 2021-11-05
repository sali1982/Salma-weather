"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swaggerUi = require('swagger-ui-express');
var swagger_1 = require("./swagger");
var axios = require('axios');
var app = (0, express_1.default)();
var port = 3000;
var haveFunMessage = function (temp) {
    if (temp > 20) {
        return "Nice Weather have fun in " + temp + " Celsius and no coding for today!";
    }
    else {
        return "Get a cup of coffee and enjoy coding in this weather: " + temp + " Celsius!";
    }
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swagger_1.swaggerDocument));
app.get('/', function (req, res) {
    return res.send('Do you want to see the weather? then go to the localhost:3000/weather/[Name of your city]');
});
app.get('/weather', function (req, res) {
    return res.send('Please enter the name of your city man!');
});
app.get('/weather/:city', function (req, res) {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=" + req.params.city + "&appid=1abbc56a04039e33f33cc542b226ab1a&units=Metric")
        .then(function (response) {
        var temp = response.data.main.temp;
        var city = response.data.name;
        return res.status(200).json({ message: haveFunMessage(temp), temp: temp, city: city });
    })
        .catch(function () {
        return res.status(500).json({ message: 'Sorry try another city', temp: null, city: req.params.city });
    });
});
app.listen(port, function () {
    return console.log("Example app listening on port 3000!");
});
