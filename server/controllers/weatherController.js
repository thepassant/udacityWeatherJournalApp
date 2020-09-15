const fetch = require("node-fetch");
//require env
require("dotenv").config();

class WeatherController {
  static async getWeatherData(req, res) {
    try {
      const response = await fetch(
          `https://samples.openweathermap.org/storage/history_bulk.json?appid=${process.env.API_KEY}`
        ),
        parsedRes = await response.json();

      res.json(parsedRes);
    } catch (err) {
      res.json({ error: err });
    }
  }
}

module.exports = WeatherController;
