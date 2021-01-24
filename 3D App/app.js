//movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//optional to do but these are the items on the card
const sneaker = document.querySelector(".sneaker img");
const title = document.querySelector(".title");
const description = document.querySelector(".info h3");
const purchase = document.querySelector(".purchase button");
const sizes = document.querySelector(".sizes");

//moving animation event

container.addEventListener("mousemove",(e)=>{
// gives you the X and Y positions of the page
    // console.log(e.pageX , e.pageY);
    let xAxis = ((window.innerWidth/2) - e.pageX)/25;
    let yAxis = ((window.innerHeight/2) - e.pageY)/25; 
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container.addEventListener("mouseenter",(e)=>{
    card.style.transition = `none`;
    // Pop Out
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(-45deg)";
   
    
});

//Animate Out

container.addEventListener("mouseleave",(e)=>{
    card.style.transition = `all 0.5s ease`;
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});
