//Displays and handles the colour palette.
function ColourPalette(){
	//a list of web colour strings
    
    //The colour arangements
    
	this.colours = ["black", "dimgray", "gray", "darkgray", "silver", "lightgray", "gainsboro", "white", "cornsilk", "bisque", "navajowhite", "sandybrown", "peru", "chocolate", "sienna", "saddlebrown", "maroon", "darkred", "firebrick", "crimson", "red", "tomato", "darkorange", "orange", "gold", "yellowgreen", "greenyellow", "limegreen", "forestgreen", "green", "darkgreen", "teal", "darkcyan", "lightskyblue", "deepskyblue", "dodgerblue", "steelblue", "royalblue", "mediumblue", "darkblue", "navy", "midnightblue", "indigo", "rebeccapurple", "darkviolet", "darkmagenta"];
    
	//Assigning black as the starting colour
	this.selectedColour = "black";

	//load the colours 
	this.loadColours = function(){
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for(let i = 0; i < this.colours.length; i++){
			let colourID = this.colours[i] + "Swatch";
			let colourHTML = "<div class='colourSwatches' id='"+ colourID + "'></div>";
			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			$(".colourPalette").append(colourHTML);
			$("#" + colourID).css("background-color", this.colours[i]);
		}

		$(".colourSwatches").first().css("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();

	//handle clicks on the colours.
	$(".colourPalette").on("click", ".colourSwatches", function(){
		//get the colour string back from the id
		let id = $(this).attr("id");
		let c = split(id, "Swatch")[0];
        
		//set the selected colour and the fill and stroke
		this.selectedColour = c;
        
        //These letiables extract the red, blue and green value as well as the opacity from the selected colour so that we can later be able to separately manipulate the alpha value for the SprayCanTool.
        
        rc = red(c);
        gc = green(c);
        bc = blue(c);
        
        fill(c);
        stroke(c);
        
        
		//remove the boarder from the last selected swatch (check them all and remove it)
		$(".colourSwatches").css("border", "0");
		//add a border to the clicked swatch div.
		$(this).css("border", "3px solid purple");

	});
}