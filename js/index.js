
$(function(){
    var latitude;
    var apiData;
    var longitude;
    var currentTemp;
    var currentWheather;
    var FartoCal = false;
    var temp;
    var id;
    var backgroundId = [299, 499, 599, 699, 799, 800];
    var bgIndex;
    var backgroundImg = [
          'http://renatures.com/wp-content/uploads/2016/09/forces-of-nature-ocean-waves-storm-lightning-clouds-3d-desktop-wallpapers-1920x1080.jpg', 
          'http://cdn.wallpapersafari.com/45/71/kU3rqZ.jpg',
          'http://cdn.wallpapersafari.com/42/35/tSNz6n.jpg',
          'https://i.ytimg.com/vi/RuqVnqNPyC0/maxresdefault.jpg',
          'https://static.pexels.com/photos/5230/road-fog-foggy-mist.jpg',
        'http://1.bp.blogspot.com/_oJBgQcdkYqM/TDWE2hMLDZI/AAAAAAAACQQ/AIVnAqLLnJg/s1600/9.+blue+haze.JPG',
          'https://wallpaperscraft.com/image/clouds_sky_cloudy_overcast_110610_602x339.jpg',
   ];
    var key = 'ef88204f01a43f7589cbfad3827abb8f';
    $.getJSON('http://ip-api.com/json').done(function(location){
            $('#country').text(location.country);
            $('#city').text(location.city);
            $('#latitude').text(location.lat);
            $('#longitude').html(location.lon);
            var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon + "&units=metric&appid=8776c81dc9ae5065873a65c7eca2078b";
        
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + location.lat + "&lon=" + location.lon + "&units=imperial&appid=8776c81dc9ae5065873a65c7eca2078b",function(data){
            var currentWeather=data.weather[0].description;
             var icon=  data.weather[0].icon;
            var iconSrc= "http://openweathermap.org/img/w/" + icon + ".png";
            temp = data.main.temp;
            $('#currentWheather').html(currentWeather);
            $('#currentWheather').prepend('<img src=' + iconSrc + '>');
                $('#currentTemp').html(data.main.temp+'&deg; F');
                    id = data.weather[0].id;
                    
                  });
                    
        
    });
    function displayTemp(){
        if (FartoCal){ 
            $('#currentTemp').html(Math.round((temp-32)*(5/9)) + '&deg; C');
            return ;
    }
    else{
        $('#currentTemp').html(temp+ '&deg; F');
        return;
    }
  }
    $('#toggle').click(function(){
            FartoCal = !FartoCal;
            displayTemp();
        
        
        });
    
    
    backgroundId.push(id);
                  bgIndex = backgroundId.sort().indexOf(id);
                $('body').css('background-image', 'url(' + backgroundImg[bgIndex] + ')');
                                                       
})