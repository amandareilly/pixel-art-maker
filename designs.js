// makes a grid of cells based on user input
function makeGrid(event) {
  event.preventDefault();
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
