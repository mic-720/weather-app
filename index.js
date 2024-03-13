let input = document.querySelector("input");
let button = document.querySelector(".search-img");
let temp = document.querySelector("#temp-value");
let cityName = document.querySelector(".city");
let humidity = document.querySelector("#humidity-value");
let windspeed = document.querySelector("#windspeed_value");
let icon = document.querySelector("#icon");
let cityInput = "";

const getInfo = async () => {
    let api = `http://api.weatherapi.com/v1/current.json?key=e669429a1a0d4df2829163533242802&q=${cityInput}&units=standard`;
    // console.log("getting data....");
    let response = await fetch(api);
    let data = await response.json();
    cityName.innerText = data.location["name"];
    temp.innerText = data.current["temp_c"];
    humidity.innerText = data.current["humidity"];
    windspeed.innerText = data.current["wind_kph"];
    let condition = data.current["condition"]["text"];
    console.log(data);
    const iconId = data.current.condition.icon.substring(
        "//cdn.weatherapi.com/weather/64x64/".length
    );
    console.log(iconId);
    icon.src = "./64x64/" + iconId;
}

const func = () => {
    cityInput = input.value;
    if(cityInput===""){
        alert("Enter City Name");
    }
    else{
        getInfo();
        // console.log(cityInput);
    }
}
button.addEventListener("click",func);
input.addEventListener("keypress",(e) => {
    // console.log(e.key);
    if(e.key==="Enter"){
        func();
    }
});