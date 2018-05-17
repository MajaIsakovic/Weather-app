class LocalStorage{
    constructor(){
        this.city = city;   
        this.state = state;
        this.defaultCity = 'London';
        this.defaultState = 'GB';
    }

    getLocalData(){
        if(localStorage.getItem('city') === null && localStorage.getItem('state')){
            this.city = this.defaultCity;
            this.state = this.defaultState;
        } else {
            this.city = localStorage.getItem('city');
            this.state = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }
    }
    
    setLocalData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
      }
    
}