const expandCardData = [
  {
    url: "assets/img1.avif",
    title: "Explore the world",
  },
  {
    url: "assets/img2.avif",
    title: "Wild Forest",
  },
  {
    url: "assets/img3.avif",
    title: "Sunny Beach",
  },
  {
    url: "assets/img4.avif",
    title: "City on Winter",
  },
  {
    url: "assets/img5.avif",
    title: "Mountains - Clouds",
  },
];



const expandCardContainerPanel = (card) => {
  return `
    <div class="panel active" style="background-image:url('${card.url}')">
         <h3>${card.title}</h3>
    </div>
  `;
};

const expandCardContainer = (document.getElementById("app").innerHTML = `
    <div class="container">
    ${expandCardData.map(expandCardContainerPanel).join("")}
    <div>
`);
// -------------------on clik expansion--------------
const panel = document.querySelectorAll('.panel')

console.log(panel)
panel.forEach(panel=>{
    panel.addEventListener('click',()=>{
      removeActiveClass()
      panel.classList.add('active')
    })
})
function removeActiveClass(){
    panel.forEach(panel=>{
      panel.classList.remove('active')
    })
}
