class UI{
    constructor(){
        this.city = document.getElementById('w_city');  
        this.country = document.getElementById('w_country'); 
        this.currentTemp = document.getElementById('w_temp');  
        this.desc = document.getElementById('w_description');  
        this.icon = document.getElementById('w_icon');
        this.details = document.getElementById('w_details');
        this.presure = document.getElementById('w_presure');
        this.humidity = document.getElementById('w_humidity');
        this.tempMin = document.getElementById('w_tempMin');
        this.tempMax = document.getElementById('w_tempMax');
        this.windSpeed = document.getElementById('w_windSpeed');
    }

    fillTheUi(weather){
        this.city.innerHTML = weather.name;
        this.country.innerHTML = `${weather.sys.country}`;
        this.currentTemp.innerHTML = `Temperature now: ${weather.main.temp} ¨C`;
        this.desc.innerHTML = `<b>Description: </b>${weather.weather.map(function(desc){
                return desc.description;     
        })}`;

        // const image = `${weather.weather.map(function(arg){
        //     return arg.icon;
        // })}`;
        // this.icon.setAttribute('src', image);
        this.presure.innerHTML = `<b>Pesure:</b> ${weather.main.pressure}`;
        this.humidity.innerHTML = `<b>Humidity:</b> ${weather.main.humidity} %`;
        this.tempMin.innerHTML = `<b>Min temperature:</b> ${weather.main.temp_min} ¨C`;
        this.tempMax.innerHTML = `<b>Max temperature:</b> ${weather.main.temp_max} ¨C`;
        this.windSpeed.innerHTML = `<b>Wind speed:</b> ${weather.wind.speed} m/s`;

    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const before = document.querySelector('.modal-content');
        const after = document.querySelector('.modal-header');
        before.insertBefore(div, after);

        setTimeout(() => {
            this.clearAlert();
        }, 4000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}