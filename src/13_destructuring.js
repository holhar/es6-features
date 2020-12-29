console.log('=================');
console.log('13. Destructuring');
console.log('-----------------');

// Example 1: Destructuring object properties
var expense = {
    type: 'Business',
    amount: '$45 USD'
};

// The old way
//var type = expense.type
//var amount = expense.amount

// ES6: Define variables that reference object properties like this to reduce the amount of duplicate code
const { type, amount } = expense;
console.log(type);
console.log(amount);

// Example 2: Applying destructuring in function signatures
var savedFile = {
    extension: 'jpg',
    name: 'repost',
    size: 14040
}

function fileSummary({ name, extension, size }, { color }) {
    return `The file ${name}.${extension} is of size ${size}. ${color}`;
}

console.log(fileSummary(savedFile, { color: 'red' }));

// Example 3: Destructuring elements of array
const companies = [
    'Google',
    'Facebook',
    'Uber'
]

const [ name1, name2, name3 ] = companies;
console.log(name1); // Google
console.log(name2); // Facebook
console.log(name3); // Uber

const { length } = companies;
console.log(length); // 3

const [ element, ...rest ] = companies;
console.log(rest); // ['Facebook', 'Uber']

// Example 4: Destructuring arrays and objects at the same time
const moreCompanies = [
    { name: 'Google', region: 'Mountain View' },
    { name: 'Facebook', region: 'Menlo Park' },
    { name: 'Uber', region: 'San Francisco' }
]

const [{ region }] = moreCompanies;

const Google = {
    areas: ['Mountain View', 'New York', 'London' ]
};

const { areas: [ area ] } = Google;
console.log(area);

// Example 5: Mapping data structures using destructuring
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

// Applying destructuring in argument list of arrow function
const mappedData = points.map(([ x, y ]) => {
    // Applying enhanced object literal for object creation
    return { x, y };
});
console.log(mappedData);