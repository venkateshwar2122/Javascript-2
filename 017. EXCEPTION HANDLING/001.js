If we have not handled run-time error , the application will terminate.

->TRY
->CATCH
->FINALLY

1) TRY block is used to represent the code where there may be a chance of getting exception.
2) CATCH BLOCK - when exception raises in try block it reaches to catch block, there we can do define fxnality need to execute when exception raises.
3) FINALLY BLOCK - this block will execute whether  execption was there or not there. IN this block we will represent statements need to
execute mandatorily or compulsorily at end of the application.

  NOTE :- in b/w try and catch blocks no other blocks are allowed

try{
  console.log(a)
}
catch(err){
//console.log(err)
console.log("error in program")
}
finally{

console.log("end of prgm")
}
