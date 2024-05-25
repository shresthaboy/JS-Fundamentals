// define two ARRAYS of equal length
// add arrays at their respective index
// create a new array with the addition and print it

// let arr1 = [1,3,5];
// let arr2 = [2,3,4];
// let arr3=[];
// let sum = arr1.map(( val , i ) => val + arr2[i]);
// console.log(sum);

//using forEach method to execute this addition of array

// arr1.forEach((val,i) => {
//     arr3[i] = val + arr2[i] // since this returns void;nthg so we are using third array to define its output format
// })
// console.log(arr3)

// adding all the inputs of arr1
// let sum1 = 0;
// let sum2=0;
// arr1.map((val) =>{
//     sum1 +=val
// })


// Now add the sum of arr2 to sum of arr1

// arr2.map((val) => {
//     sum2 += val;
// })
// let sum3 = console.log(sum1+sum2);

// Assignment: Function to calculate sum each element in the array

function calculatesum(arr){
    let sum = 0;
    arr.map((val)=>{
        sum+=val;
    });
    return sum;
}

let arr4 = [2,3,4];
let arr5 = [5,6,7];

let arr4sum = calculatesum(arr4);
let arr5sum = calculatesum(arr5);
console.log(arr4sum);
console.log(arr5sum);

let totalsum = console.log(arr4sum+arr5sum);

// optimize format for array addition

let x = [1,2,3];
let y = [5,6,7];

const sumarr = (arr)=>{
    let s = 0;
    arr.forEach(val => s+=val);
    return s;
}
let s1=sumarr(x);
let s2=sumarr(y);
console.log("The sum of two arrays is" +" " +s1+s2);
