// 30 April, 2024 MERN Stack Class Assignment

// Define an array of strings 
// And a define a variable with a letter from that string
// Then sort the string with that letter.

// includes - to check if an element is present in an array or not.

let arr = ["sabin", "dolma","rocky","smriti","han"];
let searchText = "y";
arr.forEach( name => {
    if(name.includes(searchText)){
        console.log(name);
    }
});

