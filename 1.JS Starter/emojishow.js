
// Use of forEach iterative method & If-Else-If statement.

let num = [2,50,60,40,10,15,60];

num.forEach( val => {
    if(val<50){
        console.log("😊");
    } else if(val>50 && val<100){
        console.log("😌");
    } else{
        console.log("😂");
    }
})