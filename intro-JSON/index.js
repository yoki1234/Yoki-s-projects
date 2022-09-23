const petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
      birthYear: 2021,
      photo: "assets/cat-2.jpg"
    },
    {
        name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "assets/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2012,
      photo: "assets/cat-1.jpg"
    }
  ];

function age(birthYear){
    let calAge = new Date().getFullYear()-birthYear;
    if(calAge == 1){
        return "1 year old"
    }
    else if(calAge == 0){
        return 'baby'
    }else{
        return`${calAge} years old`
    }

}  
function foods(foods){
    return`
    <h4>Favorite Foods</h4>
    <ul class="food-list">
      ${foods.map(petFood=>`<li>${petFood}</il>`).join('')}
    </ul>
    `
}
function petTemplate(pet){
    return`
    <div class="animal">
        <img class="pet-photo "src="${pet.photo}">
        <h2 class="pet-name">${pet.name}<span class="species">(${pet.species})</span></h2>
        <p><strong>Age: </strong>${age(pet.birthYear)}</P>
        ${pet.favFoods ? foods(pet.favFoods) : ''}
    </div>
    `
}

  document.getElementById("app").innerHTML=
  `
     <h1 class="app-title"> Pets (${petsData.length} result)</h1>
      ${petsData.map(petTemplate).join('')}
     <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
  `