let a = [1,2,3,4,4,5];

// directly access the values from the array without the indexes
a.forEach(val => console.log(val));

// if we want index too in with the foreach then

a.forEach( (val,i) => console.log(val,i));
// while defining the simple arrow function, we just need to think of it as defining 
// arguments and assessing them in the console

// map method of array

let y = a.map(val=> val.toString()+" "+"hey yarodomo!");
console.log(y);


// void - which return nothing
