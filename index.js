function fetchData(){
    fetch("http://localhost:3000/sensors")  //'no-cors' property disabled, used cors npm package instead
    .then((res) => res.json())
    .then((data) => {
       // console.log(data)
        let output = '<h2>Data</h2>';
        data.forEach(function(sensor){
            output += `
                <h3>Temperature: ${sensor.temp}&#8451;</h3>
                <h3>Humidity: ${sensor.humidity}&#37;</h3>
                <h3>Pressure: ${sensor.pressure} hPa</h3>
                <h3>Light intensity: ${sensor.lightIntensity} lumen</h3>
                <h3>Date: ${sensor.created}</h3>
            <br>
            `;
        });
        document.getElementById('sensors').innerHTML = output;
    });
} 

fetchData();

