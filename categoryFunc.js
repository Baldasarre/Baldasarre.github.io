
const loadMoreLinkAll = document.getElementById("loadMoreLinkAll")
eventListener()
function eventListener() {
    window.addEventListener("load", loadmore)
    loadMoreLinkAll.addEventListener("click", loadmore)
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

function loadmore() {
    for (b = 0; b < 5; b++) {
        const itemBoxCopy = document.getElementById('itemBox').cloneNode(true);
        itemBoxCopy.className = "itemBox"
        itemBoxCopy.id = "itemBox" + [b]
        itemBB.appendChild(itemBoxCopy);
        $("loadMoreLink1").slideDown();
    }
}

$(window).scroll(function () {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        loadmore()
    }
});