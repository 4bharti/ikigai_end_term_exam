var temp=document.getElementById('temp');
 var cityName=document.getElementById('city')
 var humidity=document.getElementById('humidity')
 var windspeed=document.getElementById('windspeed')
 var searchinput=document.getElementById('searchinput');
 var serchbox=document.getElementById('serchbox')
 var body_img=document.getElementById('body_img');

 var body_data=document.getElementById('body_data')
 var deatil=document.getElementById('deatil')
 var error=document.getElementById('error')





    async function checkWeather(city) {
        let Upi_key='f27b269d54e4fa1e72993364a80fa8bd'
        let repsponse= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Upi_key}&units=metric`);
        let data= await repsponse.json();

  
        
    temp.innerHTML=Math.floor(data.main.temp )+'°C';
    cityName.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity +"%";
    windspeed.innerHTML=data.wind.speed+'km/h';
    console.log(data)

  
    

    
    if (data.weather[0].main=="D:\Weather app exam\asset\cloud png.htm") {
        body_img.src='image/cloud.png'
    }
     else if (data.weather[0].main=='D:\Weather app exam\asset\36bff0ab1300f5409722973b82ef9c96.png') {
        body_img.src='image/clear.png'
    }
    else if (data.weather[0].main=='D:\Weather app exam\asset\download.jpg') {
        body_img.src='image/rain.png'
    }
    else if (data.weather[0].main=='D:\Weather app exam\asset\cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8yNl9waG90b19vZl9hX2ZvZ19wbmdfaXNvbGF0ZWRfb25fYmxhY2tfYmFja2dyb19lNThlNTUzNy1jMjVmLTRiNjAtYmZkZC03NmQ1NDRjMmI4OTcucG5n.webp') {
        body_img.src='image/darzizzl.png'
    }
    else if (data.weather[0].main=='D:\Weather app exam\asset\cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8yNl9waG90b19vZl9hX2ZvZ19wbmdfaXNvbGF0ZWRfb25fYmxhY2tfYmFja2dyb19lNThlNTUzNy1jMjVmLTRiNjAtYmZkZC03NmQ1NDRjMmI4OTcucG5n.webp') {
        body_img.src='image/mist.png'
    }
    else if (data.weather[0].main=='D:\Weather app exam\asset\cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsX29mZmljZV8yNl9waG90b19vZl9hX2ZvZ19wbmdfaXNvbGF0ZWRfb25fYmxhY2tfYmFja2dyb19lNThlNTUzNy1jMjVmLTRiNjAtYmZkZC03NmQ1NDRjMmI4OTcucG5n.webp') {
        body_img.src='image/haze.png'
    }
     body_data.style.display='flex';
     deatil.style.display='flex';
   

     }
     

      serchbox.addEventListener('click',()=>
      {
          let cityIn = searchinput.value;
          checkWeather(cityIn);
         
      })