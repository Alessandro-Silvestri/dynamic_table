
// passing the object:
// let table =
// {
//   "header":"HTML: This is the header of the table",
//   0:["col1 header", "col2 header", "col3 header", "col3 header"],
//   1:["data1", "data2", "data3", "data4"],
//   2:["data5", "data6", "data7", "data8"],
//   3:["data9", "data10", "data11", "data12"]
// }

// console.log(table.header);
// for (let i = 0; i < 4; i++)
// {
//   console.log(table[i]);
// }

// passing the arguments straight to the function
function showLists(...lists) {
  console.log(lists);
  console.log(lists.length);
}

showLists(
  'this is the header',
  ['col1 header', 'col2 header', 'col3 header', 'col3 header'],
  ['data1', 'data2', 'data3', 'data4'],
  ['data5', 'data6', 'data7', 'data8'],
  ['data9', 'data10', 'data11', 'data12'],
  ['data13', 'data14', 'data15', 'data16']
);