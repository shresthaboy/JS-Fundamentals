let userinput = prompt("Enter a number between 0-10");
let num = Number(userinput);
if (userinput > 10 || userinput < 1 || isNaN(userinput)) {
  alert(`Invalid number`);
}

let randomnumber = Math.floor(Math.random() * 10 + 1);
console.log(`Generated randomnumber is:`+randomnumber);
let result = document.getElementById("result");

let total = num + randomnumber;
console.log(`The total is:` +total);


let oechecker = ( v => {
    return v%2 === 0;
} 
)
if(oechecker(total) === 0){
    result.innerText = ` And the winner is User`
}
else{
    result.innerText = `Sorry User, rough day!`;
}
