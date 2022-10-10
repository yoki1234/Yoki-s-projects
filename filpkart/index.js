
import flipKartData from "./filpkart.json" assert{type:'json'};

//--------------------sorting
function sortingOptions(item){
    return `
    <div>
        <label for="${item}" >${item}</label>
        <input type="radio" id="${item}">
    </div>
   `
}

function sortingTemplate(sortOptions){
sortOptions = flipKartData.header.HeaderFiltering.sorting.menuOptions;
const sortBy = sortOptions.split(",");
console.log(sortBy);
return `
<div class="sortingWindow">
    <div class="sorting-container">
        <h2>${flipKartData.header.HeaderFiltering.sorting.menuTitle}</h2>
        <div class="options-container">
          ${sortBy.map(sortingOptions).join('')}
        </div>
    </div>
</div>
`
}
//--------------------------header
function header(){
  const headerData=flipKartData.header;
  const menuData=headerData.HeaderFiltering;
  return`
   <header>
        <nav id="nav">
            <div class="nav-sub-section">
                    <a herf="#">${headerData.nav.backIcon}</a>
                    <a class="pageLogo" href="#">
                        <img src="${headerData.nav.url}">
                    </a>
                    <div>${headerData.nav.title}</div>
            </div>
            <div class="nav-sub-section">
                    <a href="#">${headerData.nav.searchIcon}</a>
                    <a href="#">${headerData.nav.kartIcon}</a>
                    <a herf="#">${headerData.nav.pageEntry}</a>
            </div>
        </nav>
        <div class="menu" id="menu">
            <a href="#" id="sorting">
               <img src="${menuData.sorting.url}">
               <P>${menuData.sorting.title}</P>
            </a>
            <a href="#">
                <img src="${menuData.filter.url}">
                <P>${menuData.filter.title}</P>
            </a>
        </div>
        ${sortingTemplate()}
   </header>
  `
}

function productTemplate(productData){
    //-------------------------------------------------------------convert cm to inch
    const convertionToInch = productData.spec.display;
    const displayInCm = parseFloat(convertionToInch.trim(""));
    const displayInInch=displayInCm*0.393701;
    const inchValue = parseFloat(displayInInch).toFixed(2);
    //---------------------------------------------------------------discount price
    const discount = parseInt(productData.discount.trim(""));
    const price = parseInt(productData.price.replace(",","").trim(""));
    const saving = (discount*price)/100;
    const pay = parseInt(price-saving);
    const numFor = Intl.NumberFormat('en-US');
    const newPrice = numFor.format(pay);
    //-----------------------------------------------------------------Exchange price
    const exchange = pay-4500;
    const newExchangeOff = numFor.format(exchange);
    //-----------------------------------------------------------EMI
    const emiAmount = Math.round(pay/6);
    const emi = numFor.format(emiAmount);

   return`
   <div class="product-card-contaier">
        <a class="card-container" href="#">
            <div class="favIcon">
                <img src="${productData.favMarkerURL}">
            </div>
            <div class="product-container">
                <div class="img-container">
                    <img src="${productData.imgURL}">
                </div>
                <div class="product-detailes">
                    <span class="product-title">${productData.title} ${productData.model} (${productData.color}, ${productData.spec.storage})</span>
                    <div class="rating-consumers">
                        <div class="rating">
                            <div>${productData.rating}</div>
                            <div>${productData.ratingStar}</div>
                        </div>
                        <p>(${productData.consumers})</p>
                        <img src="${productData.plusAssureImageURL}">
                    </div>
                    <div class="product-price">
                        <span style="${productData.discount?'display:none;text-decoration:line-through':""}">${productData.currency}</span>
                        <span style="${productData.discount?'text-decoration:line-through;color:grey;font-size:12px;':""}">${productData.price}</span>
                        <span style="${productData.discount==""?'display:none':""}">${productData.currency}</span>
                        <span style="${productData.discount==""?'display:none':""}">${newPrice}</span> 
                        <span style=${productData.discount?"display:inline-block;font-size:12px;color:green":"display:none"}>${productData.discount}% off</span>
                    </div>
                    <div class="delivery">${productData.delivery}</div>
                    ${productData.emi?"":`
                    <div style="${productData.discount >= 20?"display:none":"display:block"}" class="bankoffer">${productData.bankOffer}</div>
                    <div style="${productData.discount >= 20?"display:block":"display:none"}" class="exchange">
                       <div>Top Discount of the Sale</div>
                       <div>Upto <span>${productData.currency}${newExchangeOff}</span> Off on Exchange</div>
                    </div>`}
                    <div style="${productData.emi?"display:block":"display:none"}" class="emi">
                       <div>Upto <span>${productData.currency}${newExchangeOff}</span> Off on Exchange</div>
                       <div>No Cost EMI from ${productData.currency}${emi}/month</div>
                    </div>
                    
                </div>
            </div>
                <div class="product-spec">
                    <div> ${productData.spec.ram} RAM | ${productData.spec.storage} Storage</div>
                    <div class="product-display">
                       <div>${productData.spec.display} cm (${inchValue} inch) ${productData.spec.displayHD?"Full HD+ AMOLED":""} Display</div><div>${productData.spec.battery}</div>
                    </div>
                    <div class="product-display">
                        <div>${productData.spec.backCam}</div>
                        <div style="${productData.spec.frontCam ? "display:block;":"display:none"}">${productData.spec.frontCam}</div>
                    </div>
                </div>
        </a>
   </div>
   `
}

function main(){
  const mainData= flipKartData.main;
  return`
   <main>
        ${mainData.product.map(productTemplate).join("")}
   </main>
  `
}

const flipkartTemplate = document.getElementById("app").innerHTML=`
<div class=container>
  ${header()}
  ${main()}
</div>
`
//-------------------------------------------scrolling : action at nav (header tag).
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll',()=>{
    if(lastScrollY<window.scrollY){
    nav.classList.add("nav-active");
    menu.classList.add('active');
    }else{
        nav.classList.remove("nav-active");
        menu.classList.remove('active')
    }
    lastScrollY=window.scrollY;
});
//----------------------------------------------sorting
const sorting =document.getElementById('sorting');
const sortingWindow=document.querySelector('.sortingWindow');
const sortingContainer=document.querySelector('.sorting-container');


const sortingConst = sorting.addEventListener('click',()=>{
        sortingWindow.classList.add("sorting-active");
        sortingContainer.classList.add("sorting-container-active");
});

 





