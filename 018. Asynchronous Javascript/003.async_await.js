/* 
await statement need to add only in asynchronous functions 
*/
let probj = new Promise((resolve,reject)=>{                    //probj is promise object
    let obj ={"name":"amar", "age":20,"place":"hyd"}

   // setTimeout(() =>resolve(obj),5000)

   setTimeout(()=>reject("error in promise"),5000)

})

async function fun(){

    try{
        let result = await probj
        console.log(result)
    }
    catch(err){
        console.log("catch block error:", err)
    }
}

fun()
console.log("end of pgm")

/* output

end of pgm
catch block error: error in promise    // exexuted after 5 seconds

*/

    
