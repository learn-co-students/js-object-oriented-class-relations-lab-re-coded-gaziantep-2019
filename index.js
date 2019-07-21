let store = { drivers: [], passengers: [], trips: [] };

// Driver, Passenger, and Trip gets Id;
let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;
    
    // this is how to add this Driver to store's drivers array
    store.drivers.push(this);
  }
  
  
  // Driver has trips
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this));
  }
  
  // Driver has passengers
  passengers() {
    return this.trips().map(function(trip) {
      return trip.passenger();
    });
  }
  
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    
    // this is how to add Passenger to store's passengers array
    store.passengers.push(this);
  }
  
  // Passenger has trips
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this));
  }
  
  // Passenger has drivers
  drivers() {
    return this.trips().map(function(trip) {
      return trip.driver();
    });
  }
  
}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    
    // this is how to add Trip to store's trips array
    store.trips.push(this);
  }
  
  // Trip has a Driver
  driver() {
    const findThis = this.driverId;
    // array.find(function(element))
    return store.drivers.find(function(driver) {
      return driver.id === findThis;
    });
  }
  
  // Trip has a Passenger
  passenger() {
    const findThis = this.passengerId;
    return store.passengers.find(function(passenger) {
      return passenger.id === findThis;
    });
  }
  
}