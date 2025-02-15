console.log('==================');
console.log("3. 'filter' Helper");
console.log('------------------');

// Filtering values
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number) {
    return number > 50;
});
console.log(filteredNumbers);

// Handling permissions with filter
var users = [
 { id: 1, admin: true },
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user) {
    return user.admin;
}) ;
console.log(filteredUsers);

/*
    Create a function 'reject', which should work in the opposite way of 'filter': if a
    function returns 'true', the item should *not* be included in the new array
*/
function reject(array, iteratorFunction) {
  return array.filter(function(item) {
      return !iteratorFunction(item);
  });
}

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number) {
    return number > 15;
});
console.log(lessThanFifteen);