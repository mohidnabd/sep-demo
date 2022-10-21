let toggleBtn = document.querySelector(".toggleBtn")
let container = document.querySelector(".container")

toggleBtn.addEventListener("click",function(){
    container.classList.toggle("active")
})
function close(){
    container.classList.remove("active");
}
document.addEventListener("keydown",function(event){
    if(event.key=="Backspace"||event.key=="Escape"){
        close();
    }
})