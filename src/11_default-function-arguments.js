console.log("11. Default function arguments");

// Example 1: Define default values for arguments in function signature
function sum(a = 0, b = 0) {
  return a + b;
}
console.log

// Example 2: The same is possible for objects
function addOffset(style = {}) {
  style.offset = '10px';
  return style;
}(sum(4));