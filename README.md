# Javascript Fundamental Concepts

TOC:

- 1 Asynchronous calls
  - Callbacks
  - Promises
  - Async/Await
- 2
- 3
- 4
- 5

**References:**

## 1 Asynchronous calls

Normal JS code is 'synchronous', meaning every line is executed before it starts the next line.

In a 'internet' evironment, where your app or browser executes different function calls like - api calls (eg: weather api, opendata-api etc) - function calls (for databases, etc)

A lot of those calls have no dependencies between them and might be run 'parallel' and 'in the background' so your browser can do other important stuff like loading your page.

JS was designed with this in mind and treat 'Functions' as **'First class citizens'** (or AKA 'Higher Order functions'), meaning that a function can be passed as an argument to a other function and or even 'return' a function.

**References:**

https://www.youtube.com/watch?v=PoRJizFvM7s

### Callbacks

Callbacks = general name for a function that is passed as a (object) variable.

```javascript
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
```

<link src="callback_princilple.js" width="800px">

A more modern example

```javascript
Let A = [1,2,3].map((i)=>i*i)   // A = [1,4,9] where '(i) => i*i' is the callback function

```

### Promises

Promises (since ES6) is a more elagant way to get more readable and intuitive code.<br> Before when 'chaining callbacks' where one callback may only start after finishing the former one, this was achieved in

<img src="images/HA-docker-check.png" width="800px">
