const handleSubmit = async (event) => {

        event.preventDefault();
        // check what text was put into the form field
        let cityName = document.getElementById('city').value
        let startDate = document.getElementById('start').value
        let endDate = document.getElementById('end').value
        let today = new Date()
        let tripStart = new Date(startDate)
        let tripEnd = new Date(endDate)
        let differenceInTime = tripStart.getTime() - today.getTime()
        let differenceInDays = Math.round(differenceInTime / (1000*3600*24))
        let dates = {startDate, endDate, differenceInDays}

        if(cityName === "") {
            // alert if not entry
            alert('Please enter a city')
            return
        }

        // check if valid date
        if(tripStart < today || tripEnd < tripStart) {
            alert('Invalid date')
            return
        }

        console.log("::: Form Submitted :::")

        let cityLatLon = {}
        let receivedWeatherInJson = {}
        let receivedPicInJson = {}

        console.log('Fetching geographical data from geonames:', { city: cityName });
        
        const resGeo = await fetch('http://localhost:8081/city', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({city: cityName})
        });
        try {
            // receive res from the server side and transform into json
            const receivedGeoInJson = await resGeo.json(); 
            cityLatLon = {
                city: receivedGeoInJson.geonames[0].name,
                country: receivedGeoInJson.geonames[0].countryName,
                lat: receivedGeoInJson.geonames[0].lat,
                lon: receivedGeoInJson.geonames[0].lng
            }
            console.log('Data received from geonames:', cityLatLon)
            // return cityLatLon; //this will end implementation here
        } catch (error) {
            console.log('error', error);
        }

        console.log('Fetching weather data from weatherbit:', {cityLatLon});

        const resWeather = await fetch('http://localhost:8081/weather', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(cityLatLon)
        });
        try {
            receivedWeatherInJson = await resWeather.json();
            console.log('Data received from weatherbit:', receivedWeatherInJson)

        } catch (error) {
            console.log('error', error);
        }

        console.log('Fetching a pic from pixabay:', {cityLatLon});

        const resPic = await fetch('http://localhost:8081/pic', {
            method: 'POST',
            credentials: 'same-origin',
            mode: 'cors',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(cityLatLon)
        });
        try {
            receivedPicInJson = await resPic.json();
            console.log('Data received from pixabay:', receivedPicInJson)
        } catch (error) {
            console.log('error', error);
        }
}

export { handleSubmit }