console.log('===========================');
console.log('14.a. Classes (the old way)');
console.log('---------------------------');

// Classes before ES6
function Vehicle(options) {
    this.title = options.title;
}

// Add a function to the type 'Vehicle' the old way
Vehicle.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    // Make 'Toyota' inherit properties from 'Vehicle' the old way
    Vehicle.call(this, options);
    this.color = options.color;
}

// Make 'Toyota inherit the rest from 'Vehicle' the old way
Toyota.prototype = Object.create(Vehicle.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());