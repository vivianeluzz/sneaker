const copy = document.querySelector('.carousel-logos').cloneNode(true);
document.querySelector('.slider-logos').appendChild(copy);


const contentHover = document.getElementById("content-hover");


function showMessage() {
    contentHover.style.display = "flex";
}

function hideMessage() {
    contentHover.style.display = "none";
}