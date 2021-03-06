// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });
// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "San Antonio, US"
// }).done(function(data) {
//     console.log(data);
// });

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat: 29.423017,
    lon: -98.48527,
    units: "imperial"
}).done(function (data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log(data.current.temp);
    console.log(data.current.weather[0].description);
    console.log(data.daily);

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    $("#current").append('<p class="card">' + data.current.temp + "°F" + '</pcard>')
    data.daily.forEach(function (dailyForecast, index) {
        if (index < 5) {
            let datetime = new Date(dailyForecast.dt * 1000)

            // let date1 = months[datetime.getMonth()] + " " + datetime.getDate()
            $('#forecast').append('<div class="card">' + '<h4>' + datetime + '</h4>' + '<p>'+ "Max: " + dailyForecast.temp.max + "°F" + '</p>' + '<p>' + "Low: " + dailyForecast.temp.min + "°F" + '</p>' + '<p>' + "Humidity: " + dailyForecast.humidity + "%" + '</p>' + '<p>'+ "Pressure: " + dailyForecast.pressure + '</p>' +  '<p>'+ "Mph: " + dailyForecast.wind_speed + '</p>' +'</div>')
            console.log(dailyForecast);

        }

    });
    // $("#clean-animal-list-btn").on('click', function(){
    //     $("#animals-list").children().each(function (index, element){
    //         if (index % 2 === 0){
    //             $(this).html($(this).next().html() + $(this).html());
    //             $(this).next().remove();
    //         }
    //     });
    // });

    // console.log('A step further - information for tomorrow: ', data.daily[1]);
});

