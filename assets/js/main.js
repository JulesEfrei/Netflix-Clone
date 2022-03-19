// Translate Function
function translateCarousel(elm, direction) {

    const container = document.querySelector(elm);


    if(direction == "left") { 

        container.scrollLeft -= 280


    } else if(direction == "right") {

        container.scrollLeft += 280

    }
    
}


function navbarStyle() {

    console.log("NavBar Style")

    const elm = document.querySelector("#NavBar")

    window.onscroll = () => {

        let scrollTop = window.scrollY

        if(scrollTop > 250) {

            elm.classList.add("bg-black")

        } else {

            elm.classList.remove("bg-black")

        }

    }

}

function randomize() {


    //For Each List
    Object.keys(links).forEach(element => {

        //Get List Container
        var container = document.querySelector(`#${element} .list`)


        let i = 0

        let array = []

        //Generate 10 images
        while(i < 10) {

            //Random Number between 0 and 20 (We Have 20 links and we rander only 10)
            var indexList = Math.floor(Math.random() * 20 )
            
            while(array.find(elm => elm == indexList)) {
                indexList = Math.floor(Math.random() * 20 )
            }
            
            array.push(indexList)

            //Get Image Links From file with random Number as index
            let url = Object.values(links[element])[indexList]

            //Create Element and push it inside the container
            let elm = HTMLelement(url)

            container.appendChild(elm)

            i++
        }


    });

}

function HTMLelement(link) {

    let div = document.createElement("div")
    div.setAttribute("class", "h-auto w-96")

    let a = document.createElement("a")
    a.setAttribute("href", "#")

    let img = document.createElement("img")
    img.setAttribute("src", link)
    img.setAttribute("class", "rounded")

    a.appendChild(img)
    div.appendChild(a)

    return div

}



window.onload = function() {

    randomize()

    navbarStyle()

}