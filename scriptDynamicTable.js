// passing the list of lists:
let tableList =
  [
    ["col1 header", "col2 header", "col3 header", "col4 header", "col5"],
    ["data1", "data2", "data3", "data4", "col5"],
    ["ciao1", "ciao2", "ciao3", "ciao4", "col5"],
    ["data5", "data6", "data7", "data8", "col5"],
    ["data9", "data10", "data11", "data12", "col5"],
    ["ciccio1", "ciccio2", "ciccio3", "ciccio4","col5"],
    ["ciccio5", "ciccio6", "ciccio7", "a", "col5"]
  ];

let myTable = [
  ["col1", "col2", "col3", "col4", "col5", "col6"],
  ["data1", "data2", "data3", "data4", "data5", "data6"],
  ["data7", "data8", "data9", "data10", "data11", "data12"],
  ["data13", "data14", "data15", "data16", "data17", "data18"],
  ["data19", "data20", "data21", "data22", "data23", "data24"],
]


function tableGenerator(tableList) {
  // provide a list of lists. the first list is considered as header
  let table = "";
  let numberColumnsTable = tableList[0].length;
  
  // columns structure check
  for (let i = 1; i < tableList.length; i++) {
    if (tableList[i].length !== numberColumnsTable) {
      return "ERROR: All the rows have to have the same number of columns";
    }
  }
  
  // table: opening and closing creation
  let tableOpenTag = `<table style="border-collapse: collapse; width: 90%; font-family: Arial;">\n`;
  let tableCloseTag = `</table>\n`;
  table += tableOpenTag;

  // first line table
  let trOpen = '  <tr style="font-size: 14px; background-color: rgb(216, 216, 216);">\n';
  let rowBody = "";
  let trClose = '\n  </tr>\n'
  for (let index = 0; index < numberColumnsTable; index++) {
    rowBody += `   <th style="border: 1px solid rgb(172, 172, 172); padding: 7px; text-align: left;">${tableList[0][index]}</th>${index !== numberColumnsTable - 1 ? "\n" : ""}`;
  }
  table += trOpen += rowBody += trClose // adding the first row to the table

  // rows with actual data
  for (let row = 1; row <= tableList.length - 1; row++) {
    trClose = "  </tr>\n";
    trOpen = '  <tr style="font-size: 14px;">\n';
    rowBody = "";
    for (let col = 0; col < numberColumnsTable; col++) {
      rowBody += `    <td style="border: 1px solid rgb(172, 172, 172); padding: 7px; text-align: left;">${tableList[row][col]}</td>${col !== numberColumnsTable ? "\n" : ""}`;
    }
    table += trOpen += rowBody += trClose; // adding the row to the table
  }

  table += tableCloseTag;
  return table;
}

console.log(tableGenerator(tableList));
