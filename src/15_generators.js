console.log('==============');
console.log('15. Generators');
console.log('--------------');

/*
    A Generator is a function that can be entered and exited multiple times
    By adding an asterisk at the end of the 'function' keyword, a Generator function will be created
*/

// Example 1: The shopping / laundry story as illustration of the control flow
function* shopping() {
    // Stuff on the sidewalk

    // Walking down the sidewalk

    // Go into the store with cash
    const stuffFromStore = yield 'cash';
    // Walking to laundry place
    const cleanClothes = yield 'laundry';

    // Walking back home
    return [stuffFromStore, cleanClothes];
}

// Stuff in the store
const gen = shopping();
console.log(gen.next()); // Leaving our house
// Walked into the store
// Walking up and down the aisles...
// Purchase our stuff

console.log(gen.next('groceries')); // Leaving the store with groceries
console.log(gen.next('clean clothes')); // Leaving the laundry

// Example 2: Combining Generators and 'for ... of' loops - they work really well together
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors);

// Example 3: A more practical based example with delegation of Generators using Symbol.iterator
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill',
    // Symbol.iterator is a tool that teaches objects how to respond to the 'for ... of' loop
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.tester;
    }
};

const engineeringTeam = {
    testingTeam,
    size: 3,
    department: 'Engineering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    [Symbol.iterator]: function* () {
        yield this.lead;
        yield this.manager;
        yield this.engineer;
        yield* this.testingTeam;
    }
};

// Not necessary when using Symbol.iterator
/*function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    yield* team.testingTeam;
    //const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
    //yield* testingTeamGenerator;
}*/

// Not necessary when using Symbol.iterator
/*function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}*/

const names = [];
// Not necessary when using Symbol.iterator
//for (let name of TeamIterator(engineeringTeam)) {
for (let name of engineeringTeam) {
    names.push(name);
}
console.log(names);

// Example 4: Generators with Recursion, illustrated by using tree data structures
class Comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }

    *[Symbol.iterator]() {
        yield this.content;
        // Array helpers - like 'forEach' or 'map' - do not work with Generators
        for (let child of this.children) {
            yield* child;
        }
    }
}

const children = [
    new Comment('good comment', []),
    new Comment('bad comment', []),
    new Comment('meh', [])
];
const tree = new Comment('Great Post!', children);

const values = [];
for (let value of tree) {
    values.push(value);
}
console.log(values);