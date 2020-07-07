document.getElementById("timer-display").innerHTML = localStorage.getItem("currentscore");
var inputInitials= document.getElementById("submit");
localStorage.setItem("initials", inputInitials);