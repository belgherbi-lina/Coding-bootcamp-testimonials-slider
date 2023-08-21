const btnprev = document.querySelector(".prev");
const btnnext= document.querySelector(".next");
const slides = document.querySelectorAll(".slide-container");
let index = 0;

display(index);

function display (index) {
    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[index].style.display = "flex";
}
btnnext.addEventListener("click", function(){
    index++;
    if(index > slides.length - 1){
        index = 0;
    }
    display(index);
});
btnprev.addEventListener("click", function () {
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    display(index);
});