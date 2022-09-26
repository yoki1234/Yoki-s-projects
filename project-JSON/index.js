const projectJSONData = [
  {
    name: "jskdfhlsdkj",
    img: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
    info: "hjdladladljasdlajslk",
    url: "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
  },
];

console.log("hello")
function card(project) {
  return `
    <div class="card-container active">
      <h2>${project.name}</h2>
      <div class="card-subContainer">
        <img class="project-img" src="${project.img}" alt="${project.name}">
        <span>${project.info}</span>
      </div>
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

// ------------
