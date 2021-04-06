// Your code goes here

// mouseover

const logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener("mouseover", function (event){
    event.target.style.color = "red";
    setTimeout(function(){
        event.target.style.color = "";
    }, 1000);
}, false);

const introHeader = document.querySelector('.intro');
introHeader.addEventListener('mouseover', function(event){
    event.target.style.color = "blue";
    setTimeout(function(){
        event.target.style.color = "";
    }, 1000);
}, false);

// resize

// window.addEventListener("resize", function(){
//     alert("Resized window!")
// })

// load

// window.addEventListener("load", function(){
//     alert("Time to Travel")
// })

// scroll

const navContainer = document.querySelector("body")
window.addEventListener("scroll", function(event){
    navContainer.style.background = "lightpink";
    setTimeout(function(){
        navContainer.style.background = "";
    }, 1000);
}, false);

// click

const button = document.querySelectorAll(".btn");
const buttonArray = Array.from(button);
console.log(buttonArray);

// buttonArray.forEach(function (button) {
//     button.addEventListener("click", function (evt) {
//         evt.textContent= "Clicked!";
//     })
// })

buttonArray.forEach((button) => {
    button.addEventListener("click", (event) => {
        button.textContent = "clicked!";
    })
})
