let notes = [];
let form = document.getElementById("create-note-form");

let t = localStorage.getItem("values");
console.log(t);
if(t!=null){
    notes = JSON.parse(t);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let usernote = document.getElementById("new-note").value;
  //    console.log(usernote);
  if (usernote == "") {
    alert("Please enter a note");
  } else {
    notes.push(usernote);
    localStorage.setItem("values",JSON.stringify(notes));
    console.log(notes);
  }

  document.getElementById("new-note").value = "";
  // usernote  = ''; - this statement makes the usernote variable
  // empty only in JS not in html
  displaynote();
});
displaynote();
// displaynote();
// Logic to display note
function displaynote() {
  let ultag = document.getElementById("note-list");
  let blank = "";
  notes.forEach((notes, index) => {
    blank += `<li>${notes}</li>`;
  });
  ultag.innerHTML = blank;
}
