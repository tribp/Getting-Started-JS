function add(x, x) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}

// Higher order function = takes a function as argument and returns a function
function myCalculator(x, y, callback) {
  return callback(x, y);
}

let a = myCalculator(5, 6, add); // a == 11
let b = myCalculator(8, 10, multiply); // b == 80

// JQuery callback example - Ajax request (the callback = function)
const id = 'tribp';

$('#btn').on('click', () => {
  $.getJSON({
    url: 'https://api.github.com/users/${id}',
    succes: writeToDB, // suppose writeToDB is a existing  function
    error: logError // idem
  });
});
