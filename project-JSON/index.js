const projectJSONData = [
  {
    name: "Parse And Stringify",
    img: "assets/project3.1.png",
    url: "parseAndStringify/index.html",
  }, 
];

console.log("hello")
function card(project) {
  return `
    <div class="card-container active">
      <h2>${project.name}</h2>
        <img class="project-img" src="${project.img}" alt="${project.name}">
      <a href="${project.url}"><button> click here</button></a>
    </div>
  `;
}

const projectJSONTemplate = (document.getElementById("app").innerHTML = `
<h1>JSON</h1>
<div class="container">
    ${projectJSONData.map(card).join('')}
</div>
`);

// -------------------
