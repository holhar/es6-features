console.log('======================');
console.log('16. Promises and Fetch');
console.log('----------------------');

// Example 1: Create a Promise - resolve and reject arguments are automatically provided
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        //reject();
    }, 3000);
});

// The created Promise object has two properties (amongst others): 'then' and 'catch'
promise
    .then(() => console.log('Finally finished!'))
    // Multiple 'then' can be chained
    .then(() => console.log('I was also ran!'))
    .catch(() => console.log('Uh oh!'));

console.log(promise);

// Example2: Making an HTTP request with fetch
const url = "https://jsonplaceholder.typicode.com/posts/";
const badUrl = "https://jsonplaceholder.typicode.com/posts1234/";
// Calling fetch return an instance of a Promise
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    // Calling 'badUrl' (response status 404) will not enter catch... :-/
    .catch(error => console.log('BAD', error));