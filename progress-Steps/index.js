const progressStepData = [{ step: 1 }, { step: 2 }, { step: 3 }, { step: 4 },{step:5},{step:6}];

function progressCirle(steps) {
  return `
     <div class="circle">${steps.step}</div>
    `;
}

const progressStep = (document.getElementById("app").innerHTML = `
<div class="container">
  <div class="progress-container">
    <div class="progress" id="progress"></div>
     ${progressStepData.map(progressCirle).join("")}
    </div>
    <button class="btn" id="prev" disabled>Prev</button>
    <button class="btn" id="next">Next</button>
</div>
`);

const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}