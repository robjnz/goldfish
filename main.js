 (function(window){
     
    
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("Date").innerHTML = Date();
  
    } 

window 
  
}(this));

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "30%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}