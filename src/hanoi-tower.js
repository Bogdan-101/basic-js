const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  var turnss = ((2 ** disksNumber) - 1);
  var timee = Math.floor(turnss * (3600 / turnsSpeed));
  
  
  return {
    turns: turnss,
    seconds: timee
  };
};
