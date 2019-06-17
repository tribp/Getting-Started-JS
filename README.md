# Javascript Fundamental Concepts

TOC:

- 1 Asynchronous calls
  - 'The problem'
  - Callbacks
  - Promises
  - Async/Await

**References:**

## 1 Asynchronous calls

Normal JS code is 'synchronous', meaning every line is executed before it starts the next line.

In a 'internet' evironment, where your app or browser executes different function calls like - api calls (eg: weather api, opendata-api etc) - function calls (for databases, etc)

A lot of those calls have no dependencies between them and might be run 'parallel' and 'in the background' so your browser can do other important stuff like loading your page.

JS was designed with this in mind and treat 'Functions' as **'First class citizens'** (or AKA 'Higher Order functions'), meaning that a function can be passed as an argument to a other function and or even 'return' a function.

**Conclusion**

**The evolution 'plain' callbacks, Promises and async/await is about elegant, simpler an more intuitif 'code'. Behind the scenes the same and core 'callback' functionality remains the same !!!**

**References:**

[Traversery Media](https://www.youtube.com/watch?v=PoRJizFvM7s) <br>[Promises in 10 minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)

### The Problem

When calling functions, eg to other servers over the internet, we do not know when we get the answers. This causes a problem when in case there are some dependencies or succesive actions.

Example: We need some users from server1 and then we need to update the UI. Typically the call to server1 will take some time but if we paint the screen, it would be empty. The solution is a 'callback' function 'paintUI' that is called after receiving the 'user data' from server1.

**The Problem**

```javascript
// The problem

function getUsers() {
  // call to database that takes some time
}
function paintUI() {
  //repaint the document or UI = > this takes NO time
}

// Actions
getUsers();
paintUI();
// Result will be an empty page
```

**The solution**

```javascript
// The solution with a callback

function getUsers(callback) {
  // call to database that takes some time
  ...
  // OK after some time we got the answer from the server
  // Ready to prod-ceed
  callback();
}
function paintUI() {
  //repaint the document or UI = > this takes NO time
}

// Actions
getUsers(paintUI));
// Result will show the users !
```

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

A more modern example

```javascript
Let A = [1,2,3].map((i)=>i*i)   // A = [1,4,9] where '(i) => i*i' is the callback function

```

### Promises

Promises (since ES6-2015) is a more elagant way to get more readable and intuitive code.<br> Before when 'chaining callbacks' where one callback may only start after finishing the former one, this was achieved in chaining them into the functions, resulting in very 'indented code' like a big triangle.

The Promise is an Object with properties and methods

The mechanism is like in real-life. You make a promise and later ...

ther are 3 states:

- pending
- fulfilled -> '.then' method will be executed
- rejected -> '.catch' method will be executed

```javascript
// The solution with a Promise

function getUsers() {
    return new Promise((resolve reject)=>{
        // call to database that takes some time
        ...
        // OK after some time we got the answer from the server
        // Ready to prod-ceed
        if (!error){
            resolve();  // we can pass some arguments: eg the users to paintUI
        } else {
            reject('Error: something went wrong')
        }
  })
}
function paintUI() {
  //repaint the document or UI = > this takes NO time
}

// Actions
getUsers().then(paintUI);
getUsers().catch(writeToErrorLog)
// OK
```

Extra: Sometime you have multiple Promises going and only want to proceed if everything is finished.

```javascript
// The solution with a Promise.all

const promise1 = getUsers(paintUI);
const promise2 = ..
const promise3 = ...

// Proceed when all promises are returned.
Promise.all([promise1,promise2,promise3]).then();
```

<img src="images/HA-docker-check.png" width="800px">

### Async / Await

ES7-2016

While Promises already resulted in much clearer code than callbacks, sometimes it became cumbersome in case of multiple consecutive actions: 'getUsers.then().then().then() etc

The aim was to write simple (asynchronous) code like if it was synchronous.

**How ?**

- put 'async' before the function to indicate it is asynchronous
- put 'await' before the function (in the async function) to indicate it has to be finished in order to proceed, as if it was a 'synchronous' statement.

```javascript
// The solution with a async/awit

function getUsers() {
    return new Promise((resolve reject)=>{
        // call to database that takes some time
        ...
        // OK after some time we got the answer from the server
        // Ready to prod-ceed
        if (!error){
            resolve();  // we can pass some arguments: eg the users to paintUI
        } else {
            reject('Error: something went wrong')
        }
  })
}
function paintUI() {
  //repaint the document or UI = > this takes NO time
}

async function init(){
    await getUsers();   -> looks like synchronous but 'waits'
    paintUI();          -> only when getUsers() is finished
}

// Actions
init();
// OK
```
