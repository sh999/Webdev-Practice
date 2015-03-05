$(document).ready(function(){
    console.log("lol");
    var canvas = $("#canvas")[0];
    var ct = canvas.getContext("2d");
    var width = $("#canvas").width();
    var h = $("#canvas").height();
    
    function init()
    {
        paint();
        if(typeof gameLoop != "undefined") clearInterval(gameLoop);
        gameLoop = setInterval(paint, 60);
    }
    function paint()
    {
        ct.fillStyle = "black";
        ct.fillRect(0, 0, 20, 20);
    }
    init();
    $(document).keydown(function(a){
        if(key == "38"){
            dir = "right";
        }
    })

})
                  