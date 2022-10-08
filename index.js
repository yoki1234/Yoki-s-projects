import projectData from "./projectData.json" assert{type:'json'};


function Projectcards(cardData) {
  return `
  <a href="${cardData.url}">
        <div class="project-card"
        style = ${
          cardData.contained === "web-clone"
            ? "background-color:LightSalmon;"
            : cardData.contained === "learning"
            ? "background-color:BurlyWood;"
            : cardData.contained === "project"
            ? "background-color:CornflowerBlue;"
            : "background-color:SeaShell;"}
            >
        <div class="project-card-title-container">
            <span>${cardData.no}</span>
            <span>${cardData.name}</span>
            <span style = ${
              cardData.type === "JS"
                ? "background-color:Khaki;"
                : cardData.type === "HTML"
                ? "background-color:Tomato;"
                : cardData.type === "CSS"
                ? "background-color:SkyBlue;"
                : "background-color:DarkSeaGreen;"
            }
            >${cardData.type}</span>
        </div>
        <img class="project-card-img" src="${cardData.img}" alt="${
    cardData.name
  }-img">
        <div class="project-info-container">
            <div><strong>Started on:</strong> <span>${
              cardData.startDate
            }</span></div>
            <div><strong>Completed on:</strong> <span>${
              cardData.endDate
            }</span></div>
            <div><strong>Time taken:</strong> <span>${
              cardData.timeTaken
            }</span></div>
        </div>
        </div>
    </a>
    `;
}

const projectTemplate = (document.getElementById("app").innerHTML = `
  <h1 class="header">Yoki's Projects</h1>
  <div class="main">
        ${projectData.map(Projectcards).join("")}
   </div>
  <p class="footer">In this page there are ${projectData.length} projects.</p>
`);
