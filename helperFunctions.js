function HelperFunctions(){
  //Jquery click events.

  //event handler for the clear button event. Clears the screen
  $("#clearButton").on("click", function(){
    background(255, 255, 255);
    //call loadPixels to update the drawing state
    //this is needed for the mirror tool
    loadPixels();
  });

  //event handler for the save image button. saves the canvas to the
  //local file system.
  $("#saveImageButton").on("click", function(){
    saveCanvas("myPicture", "jpg");
  });

  $("#filePrompt").change(function(){
        previewFile(this);
  });
    
    //Setting 5 different sizes for the thickness
    
  $("#XSButton").on("click", function(){
    s = 5;
  });
    
    $("#SButton").on("click", function(){
    s = 10;
  });
    
    $("#MButton").on("click", function(){
    s = 20;
  });
    
    $("#LButton").on("click", function(){
    s = 30;
  });
    
    //Allowing to manually increase or decrease sizes for the thickness by 5
    
    $("#XLButton").on("click", function(){
    s = 45;
  });
    
    $("#thinnerButton").on("click", function(){
        if(s >= 5){
            s -= 5;
        };
    });
    
    $("#thickerButton").on("click", function(){
        if(s <= 50){
            s += 5;
        };
    });
    
}
