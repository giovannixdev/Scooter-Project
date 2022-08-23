const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // static ScooterSessions = []
  stations = [];
  registeredUsers = [];
  
  register(user){
    // register method registers new users
    // register method rejects user registration user already exists
    // console.log(user)
    for (const rUser of this.registeredUsers) {
      if (JSON.stringify(rUser) == JSON.stringify(user)) {
        console.log("already registered");
        return
      }
    }
    if (user.age < 18) {
      throw new Error ("too young to register!")
      return
    }
    this.registeredUsers.push(user)
    console.log("user has been registered")
  }

  login(username, password) { 
    // login method can login new users
    let user = {}
    for (const rUser of this.registeredUsers) {
      if (rUser.username == username) {
        rUser.loggedIn = true
        user = {...rUser}
        break
      }
    }
    if (!user || user.password != password) {
      throw new Error ('Username or password are incorrect')
      // console.log('Username or password are incorrect')
      // return
    }
    console.log('user has logged in successfully')
  }

  addScooter(location,scooter){
    // addScooter method can add scooter only if location and scooter instance is passed
    if (!location)
      throw new Error ('location is not defined')
    if (!scooter)
      throw new Error ('scooter instance is not defined')
    scooter.station = location
    this.stations.push(scooter)
    // console.log(this.stations)
  }

  removeScooter(scooter){
    // removeScooter method removes target scooter from the matching station array
    for (let i = 0; i < this.stations.length; i++) {
      if (this.stations[i].serial == scooter.serial){
        this.stations.splice(1, i);			// Removes 1 item at index i
        console.log("scooter has successfully been removed")
        console.log(this.stations)
        return
      } 
    }
    throw new Error ('scooter has not previously been added')
    // console.log('scooter has not previously been added')
  }
}

module.exports = ScooterApp
