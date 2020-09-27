const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrr) {
  var arr = arrr.slice();
  let str = [];
  for(let i=0; i<arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        arr[i] = 'broken';
        break;
      case '--discard-prev':
        if(str.length > 0 && arr[i-1] !== 'broken')
          str = str.slice(0, -1);
        break;
      case '--double-next':
        if(arr[i+1] !== undefined)
          str.push(arr[i+1]);
        break;
      case '--double-prev':
        if(str.length > 0 && arr[i-1] !== 'broken')
          str.push(arr[i-1]);
        break;
      default:
        str.push(arr[i]);
        break;
    }
   } 
   return str;
};
