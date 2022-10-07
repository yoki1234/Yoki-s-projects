
import flipKartData from "./filpkart.json" assert{type:'json'};
console.log(flipKartData);



function header(){
  const headerData=flipKartData.header;
  const menuData=headerData.HeaderFiltering;
  return`
   <header>
        <nav>
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
        <div class="menu">
            <a href="#">
               <img src="${menuData.sorting.url}">
               <P>${menuData.sorting.title}</P>
            </a>
            <a href="#">
                <img src="${menuData.filter.url}">
                <P>${menuData.filter.title}</P>
            </a>
        </div>
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
  const adData = flipKartData.main.ad;
  const mainData= flipKartData.main;
  return`
   <main>
       <a herf="#">
        <img class="advertisement" src="${adData.url}">
       </a>
       
        ${mainData.product.map(productTemplate).join("")}
      
   <main>
  `
}

const flipkartTemplate = document.getElementById("app").innerHTML=`
<div class=container>
  ${header()}
  ${main()}
</div>
`