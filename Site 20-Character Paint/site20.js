function writeNumbers() {
//    document.write("<h1 onclick="change(this)"">Test header</h1>");
    document.write("<h1>nothing special</h1>");
        
    document.write("<h1>Chaaange</h1>");
    for (var i = 0; i <= 500; i++){
//        document.write("<p onclick="change(this)"> "+i+" </p>");
        if(i % 100 == 0){
            document.write("<br>");
        }
    }
}
window.onload = writeNumbers;

function change(id){
    id.innerHTML = "X";
}