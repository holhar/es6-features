console.log('===================');
console.log("8. Template strings");
console.log('-------------------');

// Strings marked by back ticks (`) can use/applay placeholders

// Example 1
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}
console.log(doubleMessage(4));

// Example 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName('John', 'Doe'));
