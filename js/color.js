//remove all classes from all td elements (reset canvas)
function resetCanvas() {
  const cells = $("td");
  cells.removeClass();
}

//event listener for reset button cilck
$("#resetButton").click(resetCanvas);

//adds css to index.html based on current value
//of color colorPicker
function setColor() {
  const color1 = $("#colorPicker1").val();
  const color2 = $("#colorPicker2").val();
  const color3 = $("#colorPicker3").val();
  const color4 = $("#colorPicker4").val();
  const colorDefinition = $("#colorDefinition");
  const css = '.color1 {background-color:' + color1 + '; text:'+ color1 + '} .color2 {background-color:' + color2 + '; text:'+ color2 + '} .color3 {background-color:' + color3 + '; text:'+ color3 + '} .color4 {background-color:' + color4 + '; text:'+ color4 + '}';

  //empty current color colorDefinition
  colorDefinition.empty();

  //add our colorDefinition
  colorDefinition.append(css);

}

//set color on document.ready
$(setColor);

//event listener for color change
$("#colorPickers input").change(setColor);

//toggles the color class on a td element
function toggleFilled() {
  //current working color
  const workingColor = $("input[name='workingColorChoice']:checked").val();
  //does the element already have the working class?
  const hasThisClass = $(this).hasClass(workingColor);

  if(hasThisClass) {
    $(this).removeClass();
  } else {
    $(this).removeClass();
    $(this).toggleClass(workingColor);
  }
}

//event listener for cell click
$("#pixel_canvas").on("click", "td", toggleFilled);
