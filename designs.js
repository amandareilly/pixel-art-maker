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

//adds css to index.html based on current value
//of color colorPicker
function setColor() {
  const color = $("#colorPicker").val();
  const colorDefinition = $("#colorDefinition");
  const css = '.filled {background-color:' + color + '}';

  //empty current color colorDefinition
  colorDefinition.empty();

  //add our colorDefinition
  colorDefinition.append(css);

}

//set color on document.ready
$(setColor);

//event listener for color change
$("#colorPicker").change(setColor);

//toggles the "filled" class on a td element
function toggleFilled() {
  $(this).toggleClass("filled");
}

//event listener for cell click
$("#pixel_canvas").on("click", "td", toggleFilled);
