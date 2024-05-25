const arr1 = [1, 2, 40, 4];

if (arr1[2] < 20) {
  console.log("hello world");
} else {
  console.log("Bye");
}

// to check if a  number is odd or even

let checker = (a) => {
  // OR we can simply do thid ( return x%2 === 0 )
  if (a % 2 === 0) {
    return true + " " + `The number is Even`;
  } else {
    return false + " " + `The number is Odd`;
  }
};

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the number to check: ', (n) => {
//   console.log(checker(n));
//   rl.close();
// });

// let n = prompt("Enter the number to check")
// console.log(checker(n));

// array looping
let x = ["sabin", "manish", "mahesh"];

x.forEach((v, i) => {
  console.log(`The value is` + " " + v, `The index is` + " " + i);
});

// map() - creates a new array from calling a function for every array element

x = x.map((val) => {
  val += " " + `Everest Boys`;
  return val;
});
console.log(x);

// task:
// array with rating of restaurant from 0 to 5
// rating ko anusar jana man lagcha ki lagdaina vannu paryo
// forEach

// const rating = [0, 1, 2, 3, 4, 5];

// rating.forEach((val) => {
//   let n = val;
//   if (n === 0 || n === 1 || n === 2) {
//     console.log(`Poor rating!` + " " + `Needs Some Serious Improvement`);
//   } else if (n === 3 || n === 4 || n === 5) {
//     console.log(`Good Rating!` + " " + `Let's Go`);
//   } else {
//     console.log(`Please provide a rating`);
//   }
// });

const arr2 = [1, 2, 3, 4];
arr2.forEach((val) => {
  switch (val) {
    case 1:
      console.log(`Poor Rating`);
      break;
    case 2:
      console.log(`Poor Rating`);
      break;
    case 3:
      console.log(`Medium Rating`);
      break;
    case 4:
      console.log(`Good Rating`);
      break;
    case 5:
      console.log(`Very Good Rating`);
      break;
    default:
      console.log(`No rating at all`);
  }
});
