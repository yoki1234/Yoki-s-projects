import projectData from "./cssAnimationProjects.json" assert{type:'json'}


function projectCard(card){
 return`
  <a href="${card.Url}" class="cardContainer">
    <h3>${card.title}</h3>
    <img src="${card.imageUrl}">
  </a>
 `
}


const cssAnimationTemplate = document.getElementById("app").innerHTML=`
<h1>${projectData.title}</h1>
<div class="container">
  ${projectData.projects.map(projectCard).join("")}
</div>
`