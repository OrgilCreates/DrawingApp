function CircleTool(){
    this.icon = "assets/circle.png";
	this.name = "CircleTo";
    

    //Nothing happens until user starts drawing
	var drawing = false;

	this.draw = function(){
        //the starting x and y-coordinates are assigned to the position of the user's mouse on the drawing canvas when the mouse is pressed down
		if(mouseIsPressed){
			if(initialX == -1){
				initialX = mouseX;
				initialY = mouseY;
                document.getElementById("content").style.cursor = "crosshair";
                //drawing begins when the mouse is pressed
				drawing = true;
                //loads the pixel data (what's drawn in the canvas) for the display window into the pixels[] array
				loadPixels();
			}

			else{
                //updates the display window with the data (brings the data back from what's drawn in the canvas and draws the ellispe between two coordinates when the user drags the mouse while holding down the mouse) in the pixels[] array
				updatePixels();
                noFill();
				ellipse(initialX, initialY, mouseX-initialX,  mouseY-initialY);
			}

		}

		else if(drawing){
            //the ellipse is drawn permanently when the user is no longer holding down the mouse (no longer drawing)
            noFill();
			ellipse(initialX, initialY, mouseX-initialX, mouseY-initialY);
			drawing = false;
            //the starting positions of the coordinates are reassigned
			initialX = -1;
			initialY = -1;
		}
	};
    
}