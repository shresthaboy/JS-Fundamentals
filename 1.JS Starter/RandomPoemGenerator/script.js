const poem = [
    "Moon whispers, night listens",
    "Rain's dance, earth applauds",
    "Sun's warmth, heart's glow",
    "Will of fire, bonds unbreakable",
    "Ninja path, destiny calls"
];

const poemBox = document.getElementById("poem-box");
const generatePoem = document.getElementById("generatePoem");


//Random method - returns a floating point number between 0(inclusive) and the number multiplied(exclusive)
// to make the multiplied number inclusive, we need to add + 1
// Eg:  let x = (Math.random()*100) + 1

generatePoem.addEventListener("click",() => {
    const poemIndex = Math.floor(Math.random()*poem.length);
    console.log("The random index is"+ " "+poemIndex);
    const randomPoem = poem[poemIndex];
    poemBox.innerText = randomPoem;
});
