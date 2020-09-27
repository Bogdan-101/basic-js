const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let counter = 0;
  var result = [].concat(...arr);
  console.log(result.length);
  for(let i=0; i<=result.length; i++) {
    if(result[i] === '^^')
      counter++;
  }

  return counter;
};
