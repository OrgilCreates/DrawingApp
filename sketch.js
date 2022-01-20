//global letiables that will store the toolbox colour palette
//and the helper functions
let toolbox = null;
let colourP = null;
let helpers = null;

//We created a global letiable "s" to set an initial thickness for the tools also be able to later manipulate it
let s = 25;

let ac = 50;

let initialX = -1;
let initialY = -1;

let rc;
let gc;
let bc;

function setup() {

    //create a canvas to fill the content div from index.html
    canvasContainer = $('#content');
    let c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new LineToTool());
//    toolbox.addTool(new TextTool());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    toolbox.addTool(new MarkerTool());
    toolbox.addTool(new RectTool());
    toolbox.addTool(new CircleTool());
    toolbox.addTool(new RippleTool());
    toolbox.addTool(new EraserTool());

}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
}


