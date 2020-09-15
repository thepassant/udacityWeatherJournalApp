const router = require("express-promise-router")();

// import controller
const WeatherController = require("../controllers/weatherController");

router.route("/country-weather").get(WeatherController.getWeatherData);

module.exports = router;
