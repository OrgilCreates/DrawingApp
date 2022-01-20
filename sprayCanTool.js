function SprayCanTool() {
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.png";
    
    this.points = 20;
    
    this.draw = function(){
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(let i = 0; i < this.points; i++){
                strokeWeight(1);
                
                //Initially, I created a spray can tool with a square shape but I created new variables called rX and rY which were random values within a range and took the distance from the mouse position to these values to create a radius that limits the filling dots so that the spray can tool is round.
                
                let rX = random(mouseX - s, mouseX + s);
                let rY = random(mouseY - s, mouseY + s);
                
                document.getElementById("content").style.cursor = "url(assets/sprayCanCursor.png), auto";
                
                let d = int(dist(mouseX, mouseY, rX, rY));
                
                
                if(d <= s){

                    fill(rc,gc,bc,ac);
		            stroke(rc,gc,bc,ac);
                    
                    point(rX, rY); 
                }
                
            }
        }
    }
}