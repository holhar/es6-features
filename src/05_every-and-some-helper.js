console.log('============================');
console.log("5. 'every' and 'some' Helper");
console.log('----------------------------');

// 'every' example
var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(function(user) {
    return user.hashSubmitted;
});
console.log(hasSubmitted);

// 'some' example
var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
    return request.status === 'pending';
});
console.log(inProgress);