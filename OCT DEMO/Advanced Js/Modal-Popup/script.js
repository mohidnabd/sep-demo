let modalBtns = document.querySelectorAll(".show-modal");
let modalPopup = document.querySelector(".modal")
let overlayBg = document.querySelector(".overlay")
let closeModal = document.querySelector(".close-modal")

function openModal(){
    modalPopup.classList.remove("hidden")
    overlayBg.classList.remove("hidden")
}
modalBtns.forEach((data)=>{
    data.addEventListener("click", openModal)
})

let closeTheModal = () =>{
    modalPopup.classList.add("hidden")
    overlayBg.classList.add("hidden")
}

closeModal.addEventListener("click",closeTheModal);

document.addEventListener("keydown",function(event){
    console.log(event)
    if(event.key == "Backspace" || event.key == "Escape"){
        closeTheModal();
        if(event.key == "g"){
            openModal();
        }
    }
})


var numbs = [1,3,4,5,6,7,9,10,13,15,17]
var changearr = (values)=> {
    return Math.pow(values,2)
}
var newnumb = numbs.map(changearr);
console.log(newnumb)

function getOnlyEvenNumbers(data){
    return data%2==0;
}
    
let filteredArray = numbs.filter(getOnlyEvenNumbers);
    
console.log(filteredArray)
