function EraserTool(){
    
    this.icon = "assets/eraser.png";
    this.name = "Eraser";
    //Drawing a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with until
	//the user starts drawing

    //    ColourPalette.selectedColour = "white";
    
	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (initialX == -1){
				initialX = mouseX;
				initialY = mouseY;
                document.getElementById("content").style.cursor = "url(assets/eraserCursor.png), auto";
			}
			//if there already are values for previousX and Y the user can draw a line from 
			//there to the current mouse location
			else{
                //Setting the strokeWeight to 30 makes it much thicker so that it is easier to fill in things
                strokeWeight(s);
                fill(211,211,211);
                stroke(211,211,211);
                
				line(initialX, initialY, mouseX, mouseY);
				initialX = mouseX;
				initialY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the initial values 
		//back to -1.
		//try and comment out these lines and see what happens!
		else{
			initialX = -1;
			initialY = -1;
		}
	};
}