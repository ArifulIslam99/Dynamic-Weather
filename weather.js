function searchCity(){
    const city = document.getElementById('search-field');
    const cityText = city.value;
    console.log(cityText);
    
    
    const url = `http://api.weatherapi.com/v1/current.json?key=2dd78c8ef64c49af833182101213008&q=${cityText}&aqi=no`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(cityText,data))

    

    city.value = '';

}

function displayTemp(city,data){

    const info = document.getElementById('info');

    info.textContent = '';
    

    const div= document.createElement('div');

    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const feel = data.current.feelslike_c;

    div.innerHTML = `
             <h2 class="temp"> ${temp}° C </h2> 
             <h2 class="temp"> ${condition} </h2> 
             <h1 class="cityName"> ${city} </h1>
                     `;

    

    info.appendChild(div);
    
    
    
    
}

