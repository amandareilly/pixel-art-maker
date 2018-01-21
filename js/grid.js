// makes a grid of cells based on user input
function makeGrid(event) {
  if(event.currentTarget!==undefined) {
    event.preventDefault();
  }
  const pixelCanvas = $("#pixel_canvas");
  const gridHeight = $("#input_height").val();
  const gridWidth = $("#input_width").val();

  let row = "";
  let table = "";
  //create a row of gridWidth cells
  for(let i = 0; i < gridWidth; i++) {
    row += "<td></td>";
  }

  //create a table of gridHeight rows of cells
  for(let j = 0; j < gridHeight; j++) {
    table += "<tr>" + row + "</tr>";
  }

  //empty existing table
  pixelCanvas.empty();

  //add table to pixelCanvas
  pixelCanvas.append(table);
}

////set initial grid size on document.ready
$(makeGrid);

//event listener for grid size submit
$("#submit_size").click(makeGrid);

//gets width of body in order to set max gridWidth
function bodyWidth() {
  const maxWidth = $("body").width();
  const maxGridWidth = Math.floor(maxWidth/20);
  const gridWidth = $("#input_width");
  gridWidth.attr("max", maxGridWidth);
}

//set width on document.ready
$(bodyWidth);

//set width on body change
$(window).resize(bodyWidth);

//enforce gridWidth limits
function enforceGridSize() {
  //define elements to work with
  const widthInput = $("#input_width");
  const heightInput = $("#input_height");
  const errorList = $("#gridSizeErrorList");

  //user input
  const inputWidth = widthInput.val();
  const inputHeight = heightInput.val();

  //limits
  const min = 2;
  const widthMax = widthInput.attr("max");

  //output
  let errors = "";

  //check min height
  if(inputHeight < min) {
    errors += '<li class="error">Grid must be at least ' + min + ' squares tall.';
    heightInput.val(min);
  }

  //check min width
  if(inputWidth < min) {
    errors += '<li class="error">Grid must be at least ' + min + ' squares wide.';
    widthInput.val(min);
  }

  //check max width
  if(inputWidth > widthMax) {
    errors += '<li class="error">Grid is limited to width of browser.  Max grid width is ' + widthMax + ' at this window size.';
    widthInput.val(widthMax);
  }

  //clear error list
  errorList.empty();
  errorList.append(errors);

}

//event handler for size change
$("#input_width").change(enforceGridSize);
$("#input_height").change(enforceGridSize);
