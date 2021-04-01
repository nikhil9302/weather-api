let place=document.getElementById("place");
let desc= document.getElementById("desc");
let temp= document.getElementById("temp");
let res= document.getElementById("response");
const KELVIN = 273;
window.addEventListener('load',function(){
    let lat;
    let lon; 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            lat=position.coords.latitude;
            lon=position.coords.longitude;            
            fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=cd52bd9e4a14413782dd1655a6ab75e3")
            .then(response => response.json())
            .then(data => {
                let t=Math.floor(data.main.temp - KELVIN);
                temp.innerHTML = t+'°<span>C</span>';
                desc.innerHTML = data.weather[0].description;
                place.innerHTML = data.name+','+data.sys.country;
                const d='rain';
                if(desc.innerHTML.includes(d)) {
                    res.innerHTML='You cannot go for a walk';
                } 
                else{
                    res.innerHTML='You could go for a walk';
                }      
                }                      
            )
        })             
        
    }
})
