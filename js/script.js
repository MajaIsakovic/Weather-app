// making obj
const ls = new LocalStorage();

const weatherLocation = ls.getLocalData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

// load weather when page loades
document.addEventListener('DOMContentLoaded', getWeather);

// add event listener on modal dialog
document.getElementById('w_change_btn').addEventListener('click', (e) =>{
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    if(city == ''){

        ui.showAlert('Please enter City', 'alert alert-danger')
    
    } else {
        // set location to ls
        ls.setLocalData(city, state) 
        // change
        weather.changeLocation(city, state);
        //close modal:
       
        $('#locModal').modal('hide');
    }
    // get
    getWeather();
});

//get weather from apo 
function getWeather(){
    weather.getWeatherData()
        .then((weather) => {
            console.log(weather)
            ui.fillTheUi(weather);
        }).catch((err) => {
            console.log(err)
        });
}
