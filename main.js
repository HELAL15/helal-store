//vars for header
const menu = document.querySelector("#menu-bar");
const navBar = document.querySelector(".navbar");
//vars for home
let slides = document.querySelectorAll(".slide-container");
let index = 0;
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
// vars for featured
//card1
const allImg = document.querySelectorAll(".featured-image-1");
const mainImg = document.querySelector(".big-image-1");
//card1
const allImg2 = document.querySelectorAll(".featured-image-2");
const mainImg2 = document.querySelector(".big-image-2");
//card3
const allImg3 = document.querySelectorAll(".featured-image-3");
const mainImg3 = document.querySelector(".big-image-3");



/////////////////////////////////////////////////////////////////////////
/* start navbar */ 
menu.onclick = () => {
  menu.classList.toggle("fa-times"); //to convert class of icon
  navBar.classList.toggle("active"); //to make the responsive work
}
//to remove navbar when scroll on screen
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navBar.classList.remove("active");
}
/* end navbar */ 



////////////////////////////////////////////////////////////////////////


/* start home */

prev.addEventListener("click" , function(){
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
})

next.addEventListener("click" , function(){
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
})


/*function next(){
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

/* if you want this code run put in html "onclick"func"()" */ /*

function prev(){
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}*/
/* end home */

///////////////////////////////////////////////////////////////////////////

/* start featured */
// card 1
allImg.forEach(image_1 => {
  image_1.addEventListener("click" , () =>{
    const src = image_1.getAttribute("src");
    mainImg.src = src;
  })
});

//card2
allImg2.forEach(image_2 => {
  image_2.addEventListener("click" , () =>{
    const src = image_2.getAttribute("src");
    mainImg2.src = src;
  })
});

//card3
allImg3.forEach(image_3 => {
  image_3.addEventListener("click" , () =>{
    const src = image_3.getAttribute("src");
    mainImg3.src = src;
  })
});
/* end featured */

//////////////////////////////////////////////////////////////////////////

