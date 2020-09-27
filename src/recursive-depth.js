const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    for(let i=0; i<arr.length; i++) {
      if(arr[i] instanceof Array) {
        let a = this.calculateDepth(arr[i]) + 1;
        if (a > max)
          max = a;
      }
    }
    return max;
  }
};