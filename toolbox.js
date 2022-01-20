//container object for storing the tools. Functions to add new tools and select a tool
function Toolbox(){
	
	let self = this;

	this.tools = [];
	this.selectedTool = null;
	
	//when a side bar item is clicked extract the tools name
	//from the div's ID.
	$(".sidebar").on("click", ".sideBarItem", function(){
		//clear any border round items
		$(".sideBarItem").css("border", "0");
		toolName = split($(this).attr('id'), "sideBarItem")[0];
		//call selectTool to update the selectedTool property
		self.selectTool(toolName); 
	});

	//add a new tool icon to the html page
	let addToolIcon = function(icon, name){
		let itemHTML = "<div class='sideBarItem' id='"+ name + "sideBarItem'> <img src='" + icon +"'></div>"; 
		$(".sidebar").append(itemHTML);


	};

	//add a tool to the tools array
	this.addTool = function(tool){
		//check that the object tool has an icon and a name
		if(!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")){
			alert("make sure your tool has both a name and an icon");
		}
		this.tools.push(tool);
		addToolIcon(tool.icon, tool.name);
		//if no tool is selected (ie. none have been added so far)
		//make this tool the selected one.
		if(this.selectedTool == null){
			this.selectTool(tool.name);
		}
	};

	this.selectTool = function(toolName){
		//search through the tools for one that's name matches
		//toolName
		for(let i = 0; i < this.tools.length; i++){
			if(this.tools[i].name == toolName){
				//if the tool has an unselectTool method run it.
				if(this.selectedTool != null && this.selectedTool.hasOwnProperty("unselectTool")) {
					this.selectedTool.unselectTool();
				}
				//select the tool and highlight it on the toolbar
				this.selectedTool = this.tools[i];
				$("#" + toolName + "sideBarItem").css("border", "2px solid blue");

				//if the tool has an options area. Populate it now.
				if(this.selectedTool.hasOwnProperty("populateOptions")){
					this.selectedTool.populateOptions();
				}
			}
		}
        
        //This sets the initial thickness of each tool to 3 so that each tool starts from the same thickness when clicked.
        s = 3;
        
        //This sets the default cursor as an initial cursor for each tool
        document.getElementById("content").style.cursor = "default";
        
        //This prevents the white colour of the eraser tool from affecting other tools
        fill(rc,gc,bc);
        stroke(rc,gc,bc);
        
        //This reinitialises the variables responsible for the initial co-ordinates of most tools.
        initialX = -1;
        initialY = -1;
	};

}