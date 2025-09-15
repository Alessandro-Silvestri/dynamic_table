
// example on how to pass the data to the data: (the first list is considered the header of the function) 
let myTable = [
        ["col1", "col2", "col3"],
        ["data1", "data2", "data3"],
        ["data7", "data8", "data9"],
        ["data13", "data14", "data15"],
        ["data19", "data20", "data21"],
        ["<b>try bold</b>", "try20", "try21"],
      ]

// passing the list of lists:
function tableGenerator(tableList) {
  /* provide a list of lists. the first list is considered as header */
  let table = '<table style="border-collapse: collapse; width: 90%; font-family: Arial;">\n';
  let numberColumnsTable = tableList[0].length;
  let tableCloseTag = '</table>\n';
  // columns structure check
  for (let i = 1; i < tableList.length; i++) {
    if (tableList[i].length !== numberColumnsTable) {
      return "ERROR: All the rows have to have the same number of columns";
    }
  }
  // first line table
  let trOpen = '  <tr style="font-size: 14px; background-color: rgb(216, 216, 216);">\n';
  let rowBody = "";
  let trClose = '\n  </tr>\n'
  for (let index = 0; index < numberColumnsTable; index++) {
    // rowBody += `   <th style="border: 1px solid rgb(172, 172, 172); padding: 7px; text-align: left;">${tableList[0][index]}</th>${index !== numberColumnsTable - 1 ? "\n" : ""}`;
    rowBody += '   <th style="border: 1px solid rgb(172, 172, 172); padding: 7px; text-align: left;">' + tableList[0][index] + '</th>\n';
  }
  table += trOpen += rowBody += trClose // adding the first row to the table


  // rows with actual data
  for (let row = 1; row <= tableList.length - 1; row++) {
    trClose = "  </tr>\n";
    trOpen = '  <tr style="font-size: 14px;">\n';
    rowBody = "";
    for (let col = 0; col < numberColumnsTable; col++) {
      // rowBody += `    <td style="border: 1px solid rgb(172, 172, 172); padding: 7px; text-align: left;">${tableList[row][col]}</td>${col !== numberColumnsTable ? "\n" : ""}`;
      rowBody += '    <td style="border: 1px solid rgb(172, 172, 172); padding: 7px; text-align: left;">' + tableList[row][col] + '</td>\n';
    }
    table += trOpen += rowBody += trClose; // adding the row to the table
  }
  // closing the tab
  table += tableCloseTag;
  return table;
}

console.log(tableGenerator(myTable));
