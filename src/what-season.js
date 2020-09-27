const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 0)
    return 'Unable to determine the time of year!';

  if (Object.prototype.toString.call(date).match(['object Date']) === null)
      throw new Error('wrong argument');

  var month = date.getMonth();
  
  if(month === 11 || (month >= 0 && month < 2))
    return 'winter';
  if(month > 1 && month < 5)
    return 'spring';
  if(month > 4 && month < 8)
    return 'summer';
  if(month > 7 && month < 11)
    return 'fall';
};
