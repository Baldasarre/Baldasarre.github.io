/*unique item functions----------------------------------------------*/

const loadMoreLink = document.getElementById("loadMoreLink1")
const loadMoreLink2 = document.getElementById("loadMoreLink2")
eventListener()
function eventListener() {  
 loadMoreLink.addEventListener("click", loadmore)
 loadMoreLink2.addEventListener("click", loadmore2)

}
var itemBox = document.getElementById('itemBox');
for (i = 2; i < 5; i++) {
    let newDiv = document.createElement('div');
    newDiv.className = "card_item"
    newDiv.id = "item" + [i]
    itemBox.appendChild(newDiv);
    const cardCopy = document.getElementById('itemCon').cloneNode(true);
    cardItemCon = document.getElementById("item" + [i]);
    cardItemCon.appendChild(cardCopy);
}
var itemBB = document.getElementById('ItemBB');
let b = 1;
function loadmore(){
    if (b < 4) {
        for (i = 0; i < 1; i++) { 
            b += 1;
            let anchor = document.createElement('div');
            anchor.id = "anchor"
            const itemBoxCopy = document.getElementById('itemBox').cloneNode(true);
            itemBoxCopy.className = "itemBox"
            itemBoxCopy.id = "itemBox" + [b]
            itemBB.appendChild(itemBoxCopy);
            $("loadMoreLink1").slideDown();
            if (b === 4){
                loadMoreLink.innerText = "Go To Unique Ones Page "
            } 
        }
    }   
}
var newitemBB = document.getElementById('newItemBB');
let c = 1;
function loadmore2(){
    if (c < 4) {
        for (i = 0; i < 1; i++) { 
            c += 1;
            let anchor2 = document.createElement('div');
            anchor2.id = "anchor2"
            const itemBoxCopy = document.getElementById('newitemBox').cloneNode(true);
            itemBoxCopy.className = "itemBox"
            itemBoxCopy.id = "newitemBox" + [b]
            newitemBB.appendChild(itemBoxCopy);
            $("loadMoreLink2").slideDown();
            if (c === 4){
                loadMoreLink2.innerText = "Go To Weekly Best Items Page "
            } 
        }
    }   
}
/*weeklyBest item functions----------------------------------------------*/
var newitemBox = document.getElementById('newitemBox');
for (i = 2; i < 5; i++) {
    let newItemDiv = document.createElement('div');
    newItemDiv.className = "card_item"
    newItemDiv.id = "newitem" + [i]
    newitemBox.appendChild(newItemDiv);
    const cardCopy2 = document.getElementById('newitemCon').cloneNode(true);
    cardItemCon = document.getElementById("newitem" + [i]);
    cardItemCon.appendChild(cardCopy2);
}
/* category name animation ----------------------------------------------------*/
document.querySelectorAll('categoryName').forEach(elem => {
    elem.onmouseenter = elem.onmouseleave = e => {
      const tolerance = 10;
      const left = 0;
      const right = elem.clientWidth;
      let x = e.pageX - elem.offsetLeft;
      if (x - tolerance < left) x = left;
      if (x + tolerance > right) x = right;
      elem.style.setProperty('--x', `${x}px`);
    };
  });
/* futures names and images ----------------------------------------------------*/  

 const futImgs =  [
    "img/NicePng_happy-customer-png_612104.png",
    "img/pngkey.com-business-girl-png-2564533.png",
    "img/piggy_bank_PNG52.png",
    "img/pngegg.png",
    "img/contact-ecommerce-help-live-online-support-icon-380636.png"
  ]
  const futNames = [
    "Happy Customer",
    "Happy Seller",
    "Save Money",
    "Announcements",
    "7/24 Support"
  ]
  

  const futuresFlex = document.getElementById("futuresFlex");
  function cardFuts(imgArr, namesArr) {
        for(let i = 0; i < imgArr.length; i++){
            const cardFutCopy = document.getElementById("card_fut1").cloneNode(true);
            cardFutCopy.id = "card_fut"+ (i + 2)
            futuresFlex.appendChild(cardFutCopy)
        }

        for(let i = 0; i < imgArr.length; i++){
            const parent = document.querySelector("#card_fut"+ (i + 2))
            const newFutCardImg = parent.querySelector("#futImg1")
            newFutCardImg.id = "futImg"+ (i + 2)
            const futImg = document.getElementById("futImg"+ (i + 2))
            futImg.src = imgArr[i]
            const newFutName = parent.querySelector("#futName1")
            newFutName.id = "futName"+ (i + 2)
            newFutName.innerHTML = namesArr[i]
        }
    }

    cardFuts(futImgs, futNames)
  

  