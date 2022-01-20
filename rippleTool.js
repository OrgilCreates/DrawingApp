function RippleTool(){
    this.name = "rippleTool";
    this.icon = "assets/ripple.png";

    //no drawing when the user does nothing
	var drawing = false;
    
    //variable 'grow' is used for enlarging the stamp shape when it increments
    var grow = 0;
    
    this.draw = function(){
        //when user holds down the mouse, it creates a circle that enlarges since 'grow' is incremented
        if(mouseIsPressed){
//            console.log("Press")
            document.getElementById("content").style.cursor = "url(assets/rippleCursor.png), auto";
            noFill();
            strokeWeight(1);
            ellipse(mouseX, mouseY, 1 + grow, 1 + grow);
            grow += 0.5;
        }
            
        else{
        //when user does anything else, but hold down the mouse (e.g. releasing the mouse), 'grow' is reset for next stamp use
            grow = 0;
        }
    }
    
};