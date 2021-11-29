function randomBinaries(){
    return Math.round(Math.random()) ;
}

function createMatrix(row, col) {
  let array = [];
  for (let y = 0; y < row; y++) {
      var arrayRow = [];
    for (let x = 0; x < col; x++) {
       arrayRow.push(randomBinaries());
    }
    array.push(arrayRow)
  }

  console.log(array);
}


createMatrix(5, 3);
