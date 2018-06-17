class Weather{

    constructor(city, state){
        // from: https://home.openweathermap.org/api_keys
        this.apiKey = '46d5ddf99170f19d16a27ec67b515fea';
        this.city = city;
        this.state = state;
      
    }

    async getWeatherData(){

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.city}&APPID=${this.apiKey}&units=metric`); 
       
        const responseData = await response.json();
        return responseData;

    }

    // Change location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}
