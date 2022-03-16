// Translate Function
function translateCarousel(elm, direction) {

    const container = document.querySelector(elm);


    if(direction == "left") { 

        container.scrollLeft -= 280


    } else if(direction == "right") {

        container.scrollLeft += 280

    }
    
}