SYNTAX:

promise_object.then((result)=>{
                             statments
                          }).catch((err)=>{
                             statements
                          })

/*   A Promise in JavaScript is a built-in object that represents the eventual completion (or
 failure) of an asynchronous operation and its resulting value. It is used to handle 
 asynchronous tasks, such as API calls, file reading, or timer-based operations, in a 
 more manageable and cleaner way than traditional callbacks.

Key Concepts of Promises
States of a Promise: A promise can be in one of the following states:

1. Pending: The promise is neither fulfilled nor rejected. It is waiting for the asynchronous 
operation to complete.

2. Fulfilled: The asynchronous operation completed successfully, and the promise has a 
resulting value.

3. Rejected: The asynchronous operation failed, and the promise has an error reason.
Flow of a Promise:

Initially, a promise is in the pending state.
When the operation is successful, the resolve() function is called, transitioning the promise
to the fulfilled state.
If the operation fails, the reject() function is called, transitioning the promise to the 
rejected state.

Handling Promises:

.then() is used to handle the value from a resolved promise.
.catch() is used to handle errors from a rejected promise.
.finally() is used to execute code regardless of whether the promise was fulfilled or rejected.


*/

let probj = new Promise((resolve,reject)=>{                    //probj is promise object
    let obj ={"name":"amar", "age":20,"place":"hyd"}

   // setTimeout(() =>resolve(obj),5000)

   setTimeout(()=>reject("error in promise"),5000)

})

probj.then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log("catch block:", err)
})

console.log("end of pgm")

/* output

end of pgm
catch block: error in promise   // executed after 5 seconds

*/


/* explanation  

Let’s break down the flow of your program in great detail, explaining what happens step by step 
during its execution.

1. Promise Creation
javascript
Copy code
let probj = new Promise((resolve, reject) => {
    let obj = { "name": "amar", "age": 20, "place": "hyd" };

    // setTimeout to reject the promise after 5 seconds
    setTimeout(() => reject("error in promise"), 5000);
});

A Promise object is created, and its executor function (resolve, reject) => { ... } is executed 
immediately.

Inside the executor:

A JavaScript object obj is declared, though it’s not directly used in this case.
The setTimeout function schedules a call to reject("error in promise") after 
5000 milliseconds(5 seconds).

At this point:
The Promise is in the "pending" state, waiting for either resolve or reject to be called.

2. Registering Handlers for the Promise
javascript
Copy code
probj.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log("catch block:", err);
});

.then() handler:
The function (result) => { console.log(result); } is registered as the success handler(then handler).
It will execute only if the promise is fulfilled (via resolve).

.catch() handler:
The function (err) => { console.log("catch block:", err); } is registered as the error handler(catach handler).
It will execute only if the promise is rejected (via reject).

3. Immediate Log Statement
javascript
Copy code
console.log("end of pgm");
This line executes immediately after registering the handlers because promises are asynchronous 
and do not block the execution of subsequent code.
At this point, "end of pgm" is logged to the console.

4. Timer Execution After 5 Seconds
javascript
Copy code
setTimeout(() => reject("error in promise"), 5000);

After 5 seconds, the setTimeout callback executes:
javascript
Copy code
reject("error in promise");

The reject() function is called with the value "error in promise".
This transitions the promise from the pending state to the rejected state.

5. Handling the Rejected Promise
Once the promise is rejected, the .catch() handler executes:
javascript
Copy code
console.log("catch block:", err);

The err parameter receives the value passed to reject, which is "error in promise".
The following message is logged to the console:

catch block: error in promise

6. .then() is Skipped
Since the promise is rejected, the .then() handler does not execute, and the success handler is skipped.
*/
