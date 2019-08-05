let driverId=0;
let passengerId=0;
let tripId=0;
let store = { drivers: [], passengers: [], trips: [] };
class Driver {
  constructor(name){
    this.name=name;
    this.id=++driverId;
    store.drivers.push(this);
  }
trips(){return store.trips.filter(
            function(item) {
                return item.driverId === this.id;
            }.bind(this)
        );
}
passengers(){return store.passengers.find(
            function(item) {
                return item.id === this.passengerId;
            }.bind(this)
        );

  }
}
class Passenger {
  constructor(name){
    this.name=name;
    this.id=++passengerId;
    store.passengers.push(this);
  }

  trips(){return store.trips.filter(
            function(item) {
                return item.passengerId === this.id;
            }.bind(this)
        );
}

  drivers(){

  }
}

class Trip {
  constructor(driver,passenger){
    this.driverId=driver;
    this.passengerId=passenger;
    this.id=++tripId;
    this.passengerId=passenger.id;
    this.driverId=driver.id;
    store.trips.push(this);
  }

  driver(){return store.trips.filter(
            function(item) {
                return item.driverId === this.id;
            }.bind(this)
        );

  }

  passengers(){

  }