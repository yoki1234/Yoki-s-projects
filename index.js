const projectData = [
  {
    no: "001",
    name: "intro-JSON",
    type: "JS",
    startDate: "23 Sep 2022",
    endDate: "23 Sep 2022",
    timeTaken: "1hr 30min",
    img: "assets/project1.png",
    url: "intro-JSON/index.html",
  },
  {
    no: "002",
    name: "Expanding-Card",
    type: "JS",
    startDate: "24 Sep 2022",
    endDate: "24 Sep 2022",
    timeTaken: "1hr 20min",
    img: "assets/project2.png",
    url: "expandingCard/index.html",
  },
];

function Projectcards(cardData) {
  return `
  <a href="${cardData.url}">
        <div class="project-card">
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
