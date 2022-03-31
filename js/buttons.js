import { products } from "./model.js";
import { display } from "./app.js";

/**************Start Variables****************** */

const dropdownDiv = document.querySelector('.dropdown');
const featuredBtn = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownLists = document.querySelectorAll('.dropdown-menu li');
const barsBtns = document.querySelectorAll('.bars');
const asideElement = document.querySelector('aside');
const backgroundModal = document.querySelector('.background-for-modal');
const filtersElement = document.querySelector('.filter-items');
const asideHeaderElement = document.querySelector('.brand-container');
const scrollBtn = document.getElementById("scrollBtn");

/**************End Variables****************** */
/**************Start Events****************** */
//Hide or show scroll button
window.onscroll = checkTheScrollBtn

// Scroll To Top button
scrollBtn.addEventListener("click",ScrollToTop);

// When user click the background sidebar is closed
backgroundModal.addEventListener("click",closeAside);

featuredBtn.addEventListener("click",openMenu);

// When user click the X icon sidebar is closed
barsBtns[0].addEventListener("click",closeAside);

// When user click the bars icon sidebar is opened
barsBtns[1].addEventListener("click",openAside);

// When user click the bars icon Filters is opened
barsBtns[2].addEventListener("click",openFilters);

// When user click the background filters are closed
backgroundModal.addEventListener("click",closeFilters);

// Dropbuttons
dropdownLists[0].addEventListener("click",featured);
dropdownLists[1].addEventListener("click",sortByLowest);
dropdownLists[2].addEventListener("click",sortByHighest);



// Toggling "display:none" class in all dropdown lists
dropdownLists.forEach((dropdownList)=>{
    dropdownList.addEventListener("click",openMenu)
})

/**************Start Events****************** */
/**************Start Functions****************** */


// Sorting by the lowest price
function sortByLowest(){
      products.sort((a,b)=>{
       return a.price - b.price
    })
    display();
    
}

// Sorting by the highest price
function sortByHighest(){
      products.sort((a,b)=>{
       return b.price - a.price
    })
    display();
    
}


// Sorting by the feature
function featured(){
    products.sort((a,b)=>{
        return a.id - b.id
    })
    display();
    
}

// Toggling "display:none" class in dropdown Button
function openMenu(){
    dropdownMenu.classList.toggle("d-none")
}


filtersElement.style.left=`-${filtersElement.getBoundingClientRect().width}px`;
function openFilters(){
    filtersElement.style.left="0";
    backgroundModal.style.opacity ='1';
    backgroundModal.classList.remove('d-none');
}


function closeFilters(){
    filtersElement.style.left=`-${filtersElement.getBoundingClientRect().width}px`;
    backgroundModal.style.opacity ='0';
    backgroundModal.classList.add('d-none');
}



asideElement.classList.remove("opened");
asideElement.classList.add("closed");
asideHeaderElement.classList.remove("opened");
asideHeaderElement.classList.add("closed");

function openAside(){

    asideElement.classList.remove("closed");
    asideElement.classList.add("opened");
    asideHeaderElement.classList.remove("closed");
    asideHeaderElement.classList.add("opened");
    backgroundModal.style.opacity ='1';
    backgroundModal.classList.remove('d-none');

    
}


function closeAside(){

    
    asideElement.classList.remove("opened");
    asideElement.classList.add("closed");
    asideHeaderElement.classList.remove("opened");
    asideHeaderElement.classList.add("closed");
    backgroundModal.style.opacity ='0';
    backgroundModal.classList.add('d-none');
    
}


function checkTheScrollBtn(){
    let scrollHeight = window.scrollY
    if(scrollHeight>400){
        scrollBtn.classList.remove("d-none")
    }else{
        scrollBtn.classList.add("d-none")

    }
    
}


function ScrollToTop(){
    document.documentElement.scrollTop=0;
}


/*****************************Start Functions******************************************** */
