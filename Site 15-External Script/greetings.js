function greetings( ){
    document.getElementById("someDiv").innerHTML = "This was written by an external script";
}
window.onload=greetings;