let form = document.getElementById("demo-form");
let arr = [];

let x = localStorage.getItem("key1");
if(x!=null){
  arr=JSON.parse(x);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("useremail").value;
  let password = document.getElementById("userpassword").value;
  console.log(email, password);

  let obj = {
    email: email,
    password: password,
  };
  arr.push(obj);
  localStorage.setItem("key1",JSON.stringify(arr));
  document.getElementById("useremail").value = "";
  document.getElementById("userpassword").value = "";
  console.log(arr);
  
});

function displayEmails(){
  //retrieve stored array from localStorage

  let UlTag = document.getElementById("Email-Box");
  let html = "";

  arr.forEach((v, index) => {
  html += `<div class="card col-12 m-2 notess" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">User ${index+1}</h5>
    <p class="card-text">${v.email}</p>
      </div>
</div>`;
  });
UlTag.innerHTML = html;
console.log(html);
}
displayEmails();

