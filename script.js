
window.addEventListener('load', function (){
    console.log ('window loaded');
    defineElementVariables();
    let weatherJson= {};
    getJsonInfo();
})




// function listings

function defineElementVariables (){
    console.log ('defineElementVariables fired');
    let tempBox= document.getElementById('tempBox');
    // console.log ('tempBox variable set to :'+tempBox);
    let precipitationBox=document.getElementById('precipitationBox');
    // console.log ('precipitationBox variable set to: '+precipitationBox);
    let bigBox=document.getElementById('bigBox');
    // console.log ('bigBox variable set to : '+bigBox);
    let windBox=document.getElementById('windBox');
    // console.log ('windBox variable set to '+windBox);
    let humidityBox = document.getElementById('humidityBox');
    // console.log ('humidityBox variable set to: '+humidityBox);
    let zipCode= document.getElementById('zipCodeInput');
    // console.log ('zipCode variable set to: '+zipCode);
    let zipForm=document.getElementById('zipCodeInput');
    console.log ('zipForm variable set to:'+zipForm);
    zipForm.addEventListener('submit', function(e){
        let zip = document.querySelector('input[name=zipcode');
        getJsonInfo(zip.value);
        e.preventDefault();

    });
}


function getJsonInfo(zip=63385){
    console.log ('getJsonInfo fired');
    const responsePromise=fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=e770ede1e51fbbb66b830c2986e6bb7a`);
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
    precipitationBox.innerHTML = `The current weather is: ${createWeatherString(weatherJson)}`;
    windBox.innerHTML =createWindString(weatherJson);
    humidityBox.innerHTML=`The humidity is currently ${weatherJson.main.humidity}%`;
    
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

function createWindString(weatherJson){
    let returnString = `The wind is currently ${weatherJson.wind.speed}MPH, coming out of the ${d2d(weatherJson.wind.deg)}.`
    return returnString;
}


