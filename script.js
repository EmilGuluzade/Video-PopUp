const watchBtn=document.querySelector(".watchButton")
const xIcon=document.querySelector(".fa-xmark")
const videoWrapper=document.querySelector(".videoWrapper")
const video=document.querySelector("video")

watchBtn.addEventListener("click",()=>{
    videoWrapper.classList.remove("active")
})
xIcon.addEventListener("click",()=>{
    videoWrapper.classList.add("active")
    video.pause()
    video.currentTime=0
})