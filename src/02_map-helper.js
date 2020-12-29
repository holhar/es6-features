console.log('===============');
console.log("2. 'map' Helper");
console.log('---------------');

// Plucking values
var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
    return image.height;
});
console.log(heights);

// Calculating values with map
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
    return trip.distance / trip.time;
});
console.log(speeds);

/*
    Implement a 'pluck' function. Pluck should accept an array and string representing a
    property name and return an array containing that property from each object.
*/
function pluck(array, property) {
    return array.map(function(array) {
        return array[property];
    });
}
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' } ];
console.log(pluck(paints, 'color'));