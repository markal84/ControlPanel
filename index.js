function fetchData(){
    fetch("http://localhost:3000/sensors")  //no-cors property disabled in fetch
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    });
} 

fetchData();

