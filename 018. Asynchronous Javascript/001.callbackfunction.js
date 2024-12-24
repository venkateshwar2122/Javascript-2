/* by default javascript follows synchronous behaviour, to implement asynchronous behaviour
we may use callbackfunction or promises or async await.

1. callback fxn
2. Promises
3. async await


In asynchronous javascript, if current functinality having any interruption due to input/output 
operations or setInterval or setTimeout remaining statements doesn't wait untill completion 
of current functionality 

*/

function fun(x){          // catching cbk function as argument
    setTimeout(x,5000)    // cbk fxn will execute after 5 seconds
    console.log("end of fun")
}

function cbk(){
    console.log("end of cbk")
}

fun(cbk)       // passing cbk function as argument
console.log("end of pgm")

/* output

end of fun
end of pgm
end of cbk      // executed after 5 seconds

*/
