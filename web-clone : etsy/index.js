const etsyData = {
  nav: {
    logo: "assets/etsy-logo.svg",
    searchIcon: "assets/search-icon.svg",
    signInIcon: "assets/sign-in-icon.svg",
    addToCartIcon: "assets/add-to-cart-icon.svg",
  },
  header: {
    title: "Discover one-of-a-kind items from independent creators",
    headerCollection: [
      {
        name: "Diwali",
        url: "assets/header/img1.webp",
      },
      {
        name: "Home & Living",
        url: "assets/header/img2.webp",
      },
      {
        name: "Clothing",
        url: "assets/header/img3.webp",
      },
      {
        name: "Jewellery",
        url: "assets/header/img4.webp",
      },
      {
        name: "Wall Art",
        url: "assets/header/img5.webp",
      },
      {
        name: "On Sale",
        url: "assets/header/img6.webp",
      },
    ],
  },
};

function headerCollectionTemplate(content){
    return`
     <a herf="#" class="header-card">
        <img src=${content.url}>
        <p>${content.name}</p>
     </a>
    `
}

const etsyTemplate = (document.getElementById("app").innerHTML = `
  <div class="container">
    <nav>
        <a href="#" class="logo"><img src=${etsyData.nav.logo}></a>
        <div class="search-box">
            <input type="search" placeholder="Search">
            <img class="nav-icon" src=${etsyData.nav.searchIcon}>
        </div>
        <img class="nav-icon" src=${etsyData.nav.signInIcon}>
        <img class="nav-icon" src=${etsyData.nav.addToCartIcon}>
    </nav>
   <header>
        <h2>${etsyData.header.title}</h2>
        <div class="header-collection">
            ${etsyData.header.headerCollection.map(headerCollectionTemplate).join('')}
        </div>
   </header>
  </div>
`);
