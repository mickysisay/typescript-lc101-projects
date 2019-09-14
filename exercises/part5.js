"use strict";
// Add your import statement here:
let kilometersToMars = 225000000;
let kilometersToTheMoon = 384400;
class Spacecraft {
    constructor(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    getDaysToLocation(kilometersAway) {
        let milesAway = kilometersAway * this.milesPerKilometer;
        let hours = milesAway / this.speedMph;
        return hours / 24;
    }
}
// Paste in the code from step 6 here:
//# sourceMappingURL=part5.js.map