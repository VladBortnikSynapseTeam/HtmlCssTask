const header = document.getElementById("headerID");
window.addEventListener("scroll",(event)=>{
    var scroll = window.scrollY;
    var header = document.getElementById("headerID");
    if(scroll > 40){
        header.classList.add('header-event');
        console.log("not zero")
    }else if(scroll == 0){
        header.classList.remove("header-event");
        console.log("zero")
    }
})