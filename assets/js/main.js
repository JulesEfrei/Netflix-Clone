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

            //Random Number between 0 and 20 (We Have 20 links and we render only 10)
            var indexList = Math.floor(Math.random() * 20 )
            
            while(array.find(elm => elm == indexList) != undefined) {
                indexList = Math.floor(Math.random() * 20 )
            }
            
            array.push(indexList)

            //Get Image Links From file with random Number as index
            let url = Object.values(links[element])[indexList]

            //Create Element and push it inside the container
            if(element == "MyList") {
                var elm = HTMLelement(url, "video")
            } else {
                var elm = HTMLelement(url, "normal")
            }

            container.appendChild(elm)

            i++
        }


    });

}

var count = 0

function HTMLelement(link, type) {

    let div = document.createElement("div")
    div.setAttribute("class", "h-auto w-96 hover:scale-125 bg-no-repeat transition-all object-cover overflow-y-visible")


    if(type == "video") {

        let id = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"]

        div.setAttribute("onmouseover", `play('#${id[count]}')`)
        div.setAttribute("onmouseout", `pause('#${id[count]}')`)

        let video = document.createElement("video")
        video.setAttribute("src", "./assets/video/header.mp4")
        video.setAttribute("class", "absolute top-0 min-h-full min-w-full object-cover rounded")
        video.setAttribute("id", id[count])
        video.setAttribute("preload", "metadata")
        video.muted = true

        div.appendChild(video)

        count++

    }

    let a = document.createElement("a")
    a.setAttribute("href", "#")

    let img = document.createElement("img")
    img.setAttribute("src", link)
    img.setAttribute("loading", "lazy")
    img.setAttribute("class", "rounded")

    a.appendChild(img)
    div.appendChild(a)

    return div

}



window.onload = function() {

    randomize()

    navbarStyle()

}

function play(video) {

    document.querySelector(video).classList.add("z-[2]")

    document.querySelector(video).play()

}

function pause(video) {

    document.querySelector(video).pause()

    document.querySelector(video).classList.remove("z-[2]")

}

function toggleSection(id) {

    let elmDisplay = document.getElementById(id)

    if( elmDisplay.style.display == "block") {

        elmDisplay.style.display = "none"

    } else {

        elmDisplay.style.display = "block"

    }

}