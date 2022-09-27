const scrollData = [
    {content:"🍇"},
    {content:"🍈"},
    {content:"🍉"},
    {content:"🍊"},
    {content:"🍋"},
    {content:"🍌"},
    {content:"🍍"},
    {content:"🥭"},
    {content:"🍎"},
    {content:"🍏"},
    {content:"🍐"},
    {content:"🍑"},
    {content:"🍒"},
    {content:"🍓"},
    {content:"🫐"},
    {content:"🥝"},
    {content:"🥑"},
]


function cards(item){
  return`
   <div class="box"><h2>${item.content}</h2></div>
  `
}

const scrollAnimationTemplate = document.getElementById("app").innerHTML=`
  <h1>Scroll to see the  animation</h1>
  ${scrollData.map(cards).join('')}
`
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}