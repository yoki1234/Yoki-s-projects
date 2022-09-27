const people = JSON.parse(localStorage.getItem("tester"));

const parseAndStringTemplate = (document.getElementById("app").innerHTML = `
<div class="conatiner">
  <div class="input-container">
    <input type="text" id="firstName" placeholder="Enter your First-Name">
    <input type="text" id="lastName" placeholder="Enter your Last-Name">
    <input type="text" id="age" placeholder="Enter your age">
    <input type="text" id="favColor" placeholder="Enter your favorite-color">  
  </div>
  <div class="btn-container">
    <button id="addbutton">Save</button>
    <button id="seebutton">Submit</button>
  </div>
  ${paragraph(people)}
</div>
`);
document.getElementById("addbutton").addEventListener("click", addToStorage);
document.getElementById("seebutton").addEventListener("click", viewStorage);

function addToStorage() {
  let tempfirst = document.getElementById("firstName").value;
  let templast = document.getElementById("lastName").value;
  let tempAge = document.getElementById("age").value;
  let tempfavColor = document.getElementById("favColor").value;
  let myObj = JSON.stringify({
    first: tempfirst,
    last: templast,
    age: tempAge,
    favColor: tempfavColor,
  });

  console.log(myObj);
  localStorage.setItem("tester", myObj);
}

// const people = JSON.parse(localStorage.getItem("tester")) || {
//   first: "none",
//   last: "none",
// };
function viewStorage() {
  let tempHolder = localStorage.getItem("tester");
  JSON.parse(tempHolder);
}
function paragraph(content){
    return`
    <div class="passive">Hello! <span>${content.first}${content.last}${content.age}</span>, 
    This user name is generated with the data entered by you and 
    your Favorite-color is <span style="color:${content.favColor}">${content.favColor}</span>.
    </div>
    `
}