//DOM ELEMENT VERIABLES

//Submit Button Element
const submitBtn = document.getElementById("submit-btn");

//Rating Component Element
const ratingComponent = document.getElementById("rating-component");

//Thank you component Elemnet
const thankyouComponent = document.getElementById("thankyou-component");

//Rating Buttons
const ratingBtns = document.querySelectorAll(".rating-btn");

// Dynamic number
let ratingScore = document.querySelector(".dynamic-number");
// Done button
const doneBnt = document.getElementById("exit-btn")

//Default Score
let defaultScore = 0;

//EVENT LISTENERS
submitBtn.addEventListener("click", submitScore);

//Sybmit Event LISTENER
ratingBtns.forEach((btn) => {
    btn.addEventListener("click", ratingBtnClicked)
})

function submitScore(event) {
    event.preventDefault();
    ratingComponent.style.display = "none";
    thankyouComponent.style.display = "block"

    ratingScore.textContent = defaultScore;
}

function ratingBtnClicked(event) {
    if (event.target.classList.contains("rating-btn")) {
        event.target.classList.toggle("active");
    }
    defaultScore = event.target.textContent;
}
doneBnt.addEventListener("click",closeThank)
function closeThank(){
    thankyouComponent.style.display = "none";
}