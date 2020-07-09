var submitButton = document.getElementById("submit-btn");
document.getElementById("timer-display").innerHTML = localStorage.getItem("currentscore");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();
var initials = document.getElementById("init").value;
var score = document

localStorage.setItem("initials", initials);
//localStorage.setItem("score", currentscore);
if (initials === "") {
    alert("Initials cannot be blank - Don't you want credit for your good score?");
  
} else {
    
return window.location.assign("./scores.html")
}
});