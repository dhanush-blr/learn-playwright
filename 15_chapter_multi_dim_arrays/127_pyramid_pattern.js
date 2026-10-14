//   *
//  ***
// *****

let n = 3;
for (let i = 1; i <= n; i++) { // iterate through rows
  let row = "";
  for (let j = 1; j <= n - i; j++) { // iterate through spaces
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) { // iterate through stars
    row = row + "*";
  }
  console.log(row);
}