// note that this file extension is .mjs
// in this code instead of writing export in a single line we are writing in front of fxn itself

export function add(a,b){
    console.log(a+b)
}

export let sub=(a,b)=>{            
    console.log(a-b)
}

export default (a,b)=>{           /* here since we are writing default with arrow fxn therfore no name of fxn needed */
    while(b!=0){
        let r = a%b;
        a=b;
        b=r;
    }
    console.log(a)
}



