console.log('==================');
console.log("6. 'reduce' Helper");
console.log('------------------');

// Example 1: summing up values
var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function(sum, trip) {
    return sum + trip.distance;
}, 0);
console.log('total distance: ' + totalDistance);

// Example 2: counting properties
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, desk) {
    if (desk.type === 'sitting') {
        previous.sitting++;
    } else if(desk.type === 'standing') {
        previous.standing++;
    }
    return previous;
}, { sitting: 0, standing: 0 });
console.log(deskTypes);

// Example 3: write a function that will remove all the duplicates from an array
function unique(array) {
  return array.reduce(function(previous, element) {
    if(previous.find(el => el == element) === undefined) {
        previous.push(element);
    }
    return previous;
  }, []);
}
var numbers = [1,1,2,3,4,4];
console.log(unique(numbers));