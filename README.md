# Travel App

This project aims to build a web app that allows users to create trip plans. When a user submit a city name with trip date, the web page then dispalys destination with its photo and 3-day weather forecast returned from external APIs. ([GeoNames API](http://www.geonames.org/), [OpenWeather](https://openweathermap.org/), [pixabay](https://pixabay.com/api/docs/#))

## Installation

1. Install npm packages
```
npm install
```
2. Sign up for API keys at:
* [GeoNames API](http://www.geonames.org/)
* [OpenWeather](https://openweathermap.org/)
* [pixabay](https://pixabay.com/api/docs/#)

3. Configure environment variables using dotenv package:
	1. Install the dotenv package
	```
	npm install dotenv
	```
	2. Create a new `.env` file in the root of your project
	3. Fill the `.env` file with your API keys like this:
	```
	GUSERNAME=**************************
	WAPIKEY=**************************
	PAPIKEY=**************************
	```
4. Start project

Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

5. Open browser at http://localhost:8081/

## Building Tools
* HTML
* CSS (SCSS)
* JavaScript
* Node
* Express
* Webpack
* Jest (Unit test)
* Workbox
