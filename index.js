const joinBtnEl = document.querySelector(".join-btn");
const closeIconEl = document.querySelector(".x-icon");
const popupContainerEl = document.querySelector(".popup-container");
const mainContainerEl = document.querySelector(".main-container");


joinBtnEl.addEventListener("click",(event)=>{
    popupContainerEl.classList.add("active");
    mainContainerEl.classList.add("inactive");
})


closeIconEl.addEventListener("click",(event)=>{
    popupContainerEl.classList.remove("active");
    mainContainerEl.classList.remove("inactive");
})