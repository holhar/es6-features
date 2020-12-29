// 12. Rest and spread operators
// Example 1: Rest operator - see VarArgs concept in Java
function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

// Example 2: Spread operator - see flatMap concept in Stream API in JDK 8 onwards
function join(array1, array2) {
  return [...array1, ...array2];
}

// Example 3: Mixing rest and spread operators
function unshift(array, ...items) {
  return [...items, ...array];
}