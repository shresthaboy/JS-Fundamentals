// creating an array with 4 quotes
// searching the array based on the stored search-text

const quote = [
    "Life is beautiful",
    "Where there is a will, there is a way",
    "If you want to shine like a sun, first burn like a sun",
    "Even the earth falls updide down, don't stop learning"
  ];
  
  const obj1 = {
    value : "Life is beautiful",
    author : "Cyrus Stha"
  };
  
  const obj2 ={
    value : "Where there is a will, there is a way",
    author : "Anish Bhandari"
  };
  
  const obj3 = {
    value : "If you want to shine like a sun, first burn like a sun",
    author : "Abdul Kalam"
  };
  
  const obj4 = {
    value : "Even the earth falls upside down, don't stop learning",
    author : "Sabin Stha"
  };
  
  const obj5 = {
    value : "This too Shall Pass",
    author : "Gyanab Sharma"
  };

  // creating 5 objects with two properties
  let arr = [
    obj1,
    obj2,
    obj3,
    obj4,
    obj5
  ]
  
  let searchtext = "you"
  quote.forEach(e => {
    console.log(typeof e);
    if(e.includes(searchtext)){
    console.log(e);
    }
  })
  