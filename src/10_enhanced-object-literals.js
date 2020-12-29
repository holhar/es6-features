// 10. Enhanced object literals
// Example 1: When property and value have the same name, the value can be omitted
const red = '#ff0000';
const blue = '#0000ff';
const COLORS = { red, blue };

// Example 2: The same is true for variables that define an array
const fields = ['firstName', 'lastName', 'phoneNumber'];
const props = { fields };

// Example 3
const canvasDimensions = function(width, initialHeight) {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
}

// Example 4: Properties that define a function can omit the colon and the function keyword
const color = 'red';

const Car = {
  color,
  drive() {
    return 'Vroom!';
  },
  getColor() {
    return this.color;
  }
};