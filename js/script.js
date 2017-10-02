var sliderDOM = document.querySelector("#slider");
var arrowDOM = document.getElementsByClassName("arrow");
var textDOM = document.querySelector("#text");
var thumbsDOM = document.getElementsByClassName("thumb");
var index = 0;

var basket = 0;

var productInfos = [{
        name: "HP komplektas",
        desc: "Pilna komplektacija tinkanti darbui ir laisvalaikiui",
        price: 600
    },

    {
        name: "Ubuntu OS CD",
        desc: "Patogi ir greita OS\
       puikiai veikianti ir ant senesnės įrangos",
        price: 2
    },

    {
        name: "Alcatel telefonas",
        desc: "Patogus ir paprastas išmanusis telefonas su FirefoxOS sistema",
        price: 200
    },

    {
        name: "Knyga - HTML & CSS (design and build websites)",
        desc: "Gera knyga tiek pradedantiesiem tiek pažengusiem front-end\
       programuotojam",
        price: 15
    },

    {
        name: "Sony SD kortelių skaitytuvas",
        desc: "Suteikiama vienerių metų garantija",
        price: 25
    },

    {
        name: "MiniPC",
        desc: "Patogus kišeninis kompiuteris su įdiegta Linux sistema",
        price: 250
    }
];

document.querySelector("#name").innerHTML = productInfos[index].name;
document.querySelector("#desc").innerHTML = productInfos[index].desc;

shiftLeft = function() {
    if (index > 0) index--;
    else {
        index = thumbsDOM.length - 1;
    }

    var newSrc = thumbsDOM[index].children[0].src;
    document.querySelector("#slider .slide img").setAttribute("src", newSrc);
    document.querySelector("#name").innerHTML = productInfos[index].name;
    document.querySelector("#desc").innerHTML = productInfos[index].desc;
    document.querySelector("#price").innerHTML =
        "Kaina: " + productInfos[index].price;
};

shiftRight = function() {
    if (index < thumbsDOM.length - 1) index++;
    else {
        index = 0;
    }

    var newSrc = thumbsDOM[index].children[0].src;
    document.querySelector("#slider .slide img").setAttribute("src", newSrc);
    document.querySelector("#name").innerHTML = productInfos[index].name;
    document.querySelector("#desc").innerHTML = productInfos[index].desc;
    document.querySelector("#price").innerHTML =
        "Kaina: " + productInfos[index].price;
};

arrowDOM[1].onclick = shiftLeft; // left arrow click handler

arrowDOM[0].onclick = shiftRight; //right arrow click handler

document.querySelector("#addToCart").onclick = function() {
    alert("Nupirkta!");
    basket += productInfos[index].price;
    document.querySelector("#basketValue").innerHTML = "Bendra vertė: " + basket;
    document.querySelector("#basketContents").innerHTML +=
        "<br>" + productInfos[index].name;
    
};

document.querySelector("#clearAll").onclick = function() {
    basket = 0;
    document.querySelector("#basketValue").innerHTML = "Bendra vertė: " + basket;
    document.querySelector("#basketContents").innerHTML = "";
};

displayCSS = ["none", "block"];
document.querySelector("#cartMenu").onclick = function() {
    displayCSS.reverse();
    document.querySelector("#menu").style.display = displayCSS[0];
};
