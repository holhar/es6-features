// 9. Arrow functions
/*
    Example 1: function keyword can be omitted, in case of only one
    param the parentheses can be omitted as well
*/
const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*
    Example 2: arrow function is not applicable for object properties
*/
const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};