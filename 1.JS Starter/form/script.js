let notes = [];
let form = document.getElementById("create-note-form");
let searchform = document.getElementById("searchform");

let temp = localStorage.getItem("notes");
console.log(temp);
if (temp != null) {
  notes = JSON.parse(temp);
}

// const myobjectString = localStorage.getItem('Values');
// const myobject = JSON.parse(myobjectString);
// console.log(myobjectString);
// console.log(myobject);

// now adding an event when the form is submitted
form.addEventListener("submit", (e) => {
  // to avoid refreshing the webpage while submitting the form
  e.preventDefault();
  // console.log(e);

  // Now to add the user input i.e. note to the array, first of all we need to
  // read the values from input

  let UserNote = document.getElementById("new-note").value;
  console.log(UserNote);
  if (UserNote == "") {
    alert("Please enter a note");
    // return;
  } else {
    // After this, push the value to the notes array
    notes.push(UserNote);
    localStorage.setItem("notes", JSON.stringify(notes));
    // UserNote = ''; //  you're only updating the value of the UserNote variable
    //in your JavaScript code to an empty string.
    // to clear the input field visually from browser, we should select the input field & set it to empty
    document.getElementById("new-note").value = "";
    DisplayNote();
  }
});
DisplayNote();
// Assignment - Solve the two issues
// Fix the issue: 1) Empty value shoulnot be added in the array, if done give an alert
// 2) The input value should be in visible after adding to the notes
function deleteNote(index) {
  let result = confirm(`"Are you sure you want to delete: ${notes[index]}?"`);
  if (result === false) {
    return;
  } else {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    DisplayNote();
  }
}
//Assignment - update function
function updateNote(index) {
  let updatedNote = prompt("Enter the updated note:");

  // to check if the user cancels the prompt or
  // enters an empty note then function returns early without any changes.
  // trim() method removes whitespace characters from both ends of a string
  if (updatedNote === null || updatedNote.trim() === "") {
    return;
  } else {
    notes[index] = updatedNote;
    localStorage.setItem("notes", JSON.stringify(notes));
    DisplayNote();
  }
}
function DisplayNote() {
  console.log(notes);
  let UlTag = document.getElementById("add-note");
  let NewNote = "";

  notes.forEach((note, index) => {
    // assessing each element in the notes array
    NewNote += `<div class="card col-12 m-2 notess" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <p class="card-text">${note}</p>
      <button onclick="updateNote(${index})" href="#" class="btn btn-warning">Update</button>
      <button onclick="deleteNote(${index})" class="btn btn-info">Delete</button>
    </div>
  </div>`;
    // `<li class="list-group-item">${note}</li>
    // template literal; to use the variable as placeholder and replace with the original value
  });
  UlTag.innerHTML = NewNote;
}
searchform.addEventListener("submit", (e) => {
  e.preventDefault();

  let searchText = document.getElementById("search-text").value.toLowerCase();

  // if we have search text entered then show it in html else remove it
  if (searchText != "") {
    document.getElementById(
      "searching-for"
    ).innerHTML = `<h3 class="mb-5">Searching for ${searchText}</h3>`;
  } else {
    document.getElementById("searching-for").innerHTML = "";
  }

  // get all the notes card in our document as object
  let allNotes = document.getElementsByClassName("notess");
  let counter = 0; // to track the number of notes found

  // console.log(notess);
  // document.getElementsByTagName('p'); // searches for p tag in whole document

  // and to be precise, we only searched in the notes section

  // 1. first convert the object to array
  // 2. then loop through the array and check if the note contains the search text or not
  // 3. if it contains the note show it else hide it
  Array.from(allNotes).forEach((e) => {
    let note = e.getElementsByTagName("p")["0"].innerText.toLowerCase();
    if (note.includes(searchText)) {
      e.style.display = "block";
      counter++; // increment when note is found
    } else {
      e.style.display = "none";
    }
  });
  if (counter === 0) {
    //if no note is found
    alert("No notes found");
  }
});
