// document.getElementById("result").innerHTML = UV;
let UV = prompt("Let's Start! Rock, Paper or Scissor");
let p = document.getElementById("result");
console.log(p);
//method-1
// if(UV == null){
//     console.log("Let's Start! Rock, Paper or Scissor");
// }else if(UV.toLocaleLowerCase()=="paper"){
//     console.log("Scissor");
// }else if(UV.toLowerCase()=="rock"){
//     console.log("paper");
// }
// else{
//     console.log("scissor");
// }

// if(UV !=null && UV.toLowerCase()=="rock"){
//     console.log("paper");
// }
// else if(UV!=null && UV.toLowerCase()=="paper"){
//     console.log("rock");
// }
// else{
//     if(UV=null){
//         console.log("Enter ur bid");
//     }else{
//         console.log("scissor")
//     }
    
// }
// method -2
if(UV!=null){
    if(UV.toLowerCase()=="rock"){
        console.log("paper");
        p.innerText="Computer says Paper"
    }else if(UV.toLowerCase()=="paper"){
        console.log("rock");
        p.innerText="Computer says rock";
    }else{
        console.log("scissor");
        p.innerText="Computer says scissor";
    }
}else{
    console.log("Let's Start! Rock, Paper or Scissor");
    p.innerText="Let's Start! Rock, Paper or Scissor";  
}