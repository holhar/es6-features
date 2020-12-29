console.log('============');
console.log("7. Const/Let");
console.log('------------');

// Use 'const' for invariants and 'let' for variables

// Example 1
let age = 45;
const dateOfBirth = '01.01.1990';
const name = 'asdf';

// Example 2
const statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message = '';
const currentCode = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}