function writeNumbers(){
    content = "";
    for(i = 0; i < 1000; i++){
        content = content + i + "<br>";
    }
    document.getElementById("numbers").innerHTML = content;
}
window.onload=writeNumbers;