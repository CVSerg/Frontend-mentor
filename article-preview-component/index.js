// Desktop share button
const imgBtn = document.getElementById("desktop-share-btn");
imgBtn.addEventListener("click", toggleNone);
function toggleNone() {
    const shareCont = document.querySelector(".chare-shape-container");
    shareCont.classList.toggle("display-none");
}
//Mobile Share Toggle
const mobileAuthorArea = document.querySelector(".mobile-author-area");
const mobileShareBar = document.querySelector(".mobile-social-sharing-bar");
const mobileShareBtnContainer = document.querySelector(".mobile-share-btn-container");
mobileShareBtnContainer.addEventListener("click", function () {
    mobileAuthorArea.style.display = "none"
    mobileShareBar.style.display = "flex"
})
const mobileSocialShareBtn = document.querySelector(".mobile-social-share-btn-container");
mobileSocialShareBtn.addEventListener("click",function(){
    mobileAuthorArea.style.display = "flex"
    mobileShareBar.style.display = "none"
})