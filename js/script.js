const up = document.querySelector(".up-btn"),
down = document.querySelector(".down-btn"),
elevator = document.querySelector(".elevator"),
nav = document.querySelector("nav"),
floor1 = document.querySelector(".floor1"),
floor2 = document.querySelector(".floor2"),
floor3 = document.querySelector(".floor3"),
doors = document.querySelectorAll(".door"),
text1 = document.querySelector(".slide_texts .lift1"),
text2 = document.querySelector(".slide_texts .lift2"),
text3 = document.querySelector(".slide_texts .lift3")

let floor = 1

elevator.style.background = `url(images/elevator${floor}.jpg)`

window.addEventListener('scroll', function(event) {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition === 0){
        nav.classList.remove("active")
    }else{
        nav.classList.add("active")
    }
});


const floorcheck = () =>{
    if(floor === 1){
        floor1.classList.add("active")
        floor2.classList.remove("active")
        floor3.classList.remove("active")
        text1.classList.add("active")
        text2.classList.remove("active")
        text3.classList.remove("active")
        
    } else if(floor === 2){
        floor1.classList.remove("active")
        floor2.classList.add("active")
        floor3.classList.remove("active")
        text1.classList.remove("active")
        text2.classList.add("active")
        text3.classList.remove("active")
        
    } else if(floor === 3){
        floor1.classList.remove("active")
        floor2.classList.remove("active")
        floor3.classList.add("active")
        text1.classList.remove("active")
        text2.classList.remove("active")
        text3.classList.add("active")
        
    }
}

const door_open = () =>{
    doors.forEach((door) =>{
        door.classList.add("active") 
    })
}
const door_close = () =>{
    doors.forEach((door) =>{
        door.classList.remove("active") 
    })
}

up.addEventListener("click", () => {
    if(floor != 3){
        door_open()

        setTimeout(() =>{
            floor = floor + 1
            elevator.style.background = `url(images/elevator${floor}.jpg)`
            door_close()
            floorcheck()
        }, 1000)
    }
})

down.addEventListener("click", () => {
    if(floor != 1){
        door_open()

        setTimeout(() =>{
            floor = floor - 1
            elevator.style.background = `url(images/elevator${floor}.jpg)`
            floorcheck()
            door_close()
        }, 1000)
    }
})
