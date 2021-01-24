// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links or toggle links in mobile************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",()=>{
    // linksContainer.classList.toggle("show-links");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0;
    }
});

// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navBarHeight){
        navBar.classList.add("fixed-nav");
        topLink.classList.add("show-link");
    }else{
        navBar.classList.remove("fixed-nav");
        topLink.classList.remove("show-link");
    }
    
});

// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach((scrollLink)=>{
    scrollLink.addEventListener("click",(e)=>{
        e.preventDefault();
        //navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        //.SLICE() to remove the #
        const element = document.getElementById(id);
        //calculate the heights
        const navBarHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        
        //window.scrollTo is an object
        let position = element.offsetTop - navBarHeight;
        if(!fixedNav){
            position = position - navBarHeight;
        }

        if(navBarHeight > 82){
            position = position + containerHeight; //this is for navigating the mobile screen
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    });
});