class Scooter {
  constructor(station, user) {
    this.station = station
    this.user = user
    this.serial = Math.floor(Math.random() * 1000)
    this.charge = Math.floor(Math.random() * 100)
    this.isBroken = false
    this.docked = true
  }

  async recharge() {
    console.log('Starting charge');
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds
    this.charge = 100
    console.log('Charge complete');
  }
  
  rent() {
    // scooters can be rented if fully charged + not broken
    if (!this.isBroken && this.charge == 100) {
      this.docked = false
      console.log("Enjoy the ride!")
    }
    else {
      throw new Error ("Scooter low on battery, please recharge")
      // console.log("Scooter low on battery, please recharge")
    }
  }

  requestRepair() {
    throw new Error("Scooter is broken, please send a repair request")
    // console.log("Scooter is broken, please send a repair request")
  }
 
  dock(station) {
    // station should be assigned to station property when docked, docked should be assigned as true
    if (!station) {
      throw new Error ("Docking station required")
      // console.log("Docking station required")
      // return
    }
    this.station = station
    this.docked = true
    this.user = ''
  }
}

module.exports = Scooter
