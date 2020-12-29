console.log('================');
console.log("4. 'find' Helper");
console.log('----------------');

// Example 1
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user) {
    return user.admin;
});
console.log(admin);

// Example 2
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(a => a.balance == 12);
console.log(account);

/*
    Write a 'findWhere' function that achieves to find an object inside an
    array by a given property/value pair
*/
function findWhere(array, criteria) {
  var prop = Object.keys(criteria)[0];
  var value = Object.values(criteria)[0];
  return array.find(el => el[prop] == value);
}

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

console.log(findWhere(ladders, { height: 25 }));