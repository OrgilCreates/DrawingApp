//a tool for drawing straight lines to the screen. Allows the user to preview the a line to the current mouse position before drawing the line to the pixel array.
function LineToTool(){
	this.icon = "assets/lineTo.png";
	this.name = "LineTo";

	let drawing = false;

	//draws the line to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(initialX == -1){
				initialX = mouseX;
				initialY = mouseY;
                document.getElementById("content").style.cursor = "crosshair";
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the line
				line(initialX, initialY, mouseX, mouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			initialX = -1;
			initialY = -1;
            strokeWeight(s);
		}
	};

}
