// shift() - removes the first array element and shifts all other elements to the left or lower index
// unshift() - adds a new element to the beginning of the array

const arr = ["apple","banana","orange","kiwi","mango"];
// now remove first element of fruits array
let op = arr.shift();
// console.log(op);
console.log(arr);

// now add new element to the array named "strawberry"

op =arr.unshift("strawberry");
console.log(arr)

// self-practise : Chatgpt Guru
// Define an array called numbers containing some numbers.
// Define a function called checkNumber that takes a parameter num.
// Use the includes() method to check if num is in the numbers array.
// If num is in the numbers array, use the shift() method to remove it.
// If num is not in the numbers array, use the unshift() method to add it to the beginning.
// Return the modified numbers array.

const numbers = [1,0,7,8,3];
const checkNumber = (num =>{
    if(numbers.includes(num)){
        numbers.shift();
        console.log(numbers);
    } else{
        numbers.unshift();
        console.log(numbers);
    }
})
checkNumber(6);