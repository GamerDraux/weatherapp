

window.addEventListener('load', function (){
    console.log ('window loaded');
    defineElementVariables();
    let weatherJson= {};
    getJsonInfo();
  
})




// function listings
function kelvinToFarenheit(kelvin){
    let f=(kelvin-273.15)*9/5+32;
    return f;
}

function defineElementVariables (){
    console.log ('defineElementVariables fired');
    let tempBox= document.getElementById('tempBox');
    // console.log ('tempBox variable set to :'+tempBox);
    let precipitationBox=document.getElementById('precipitationBox');
    // console.log ('precipitationBox variable set to: '+precipitationBox);
    let bigBox=document.getElementById('bigBox');
    // console.log ('bigBox variable set to : '+bigBox);
}

function getJsonInfo(){
    console.log ('getJsonInfo fired');
    const responsePromise=fetch('http://api.openweathermap.org/data/2.5/weather?zip=63385,us&appid=e770ede1e51fbbb66b830c2986e6bb7a');
    responsePromise.then(function(response){
        const jsonPromise=response.json();
        jsonPromise.then(function(json){
            
            resetDisplay(json);
        })
    })
    
    
}

function resetDisplay(weatherJson){;
    console.log ('resetDisplay fired');
    console.log (weatherJson);
    tempBox.innerHTML = `The current temp is: ${Math.round(kelvinToFarenheit(weatherJson.main.temp))}F`;

    precipitationBox.innerHTML = `The current weather is: ${createWeatherString(weatherJson)}`
}

function createWeatherString (weatherJson){
    let returnString = [];
    for (i=0; i<weatherJson.weather.length; i++){
        returnString.push(weatherJson.weather[i].description);
    }
    returnString= returnString.join(", ");
    returnString+='.';
    return returnString;
}