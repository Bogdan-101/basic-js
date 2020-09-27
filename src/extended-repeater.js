const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes === undefined) {
    return str + options.addition;
  }
  let ans = '';

  var addStr = '';
  for(let i=0; i<options.additionRepeatTimes; i++) {
    addStr+=options.addition + '^';
  }
  addStr = addStr.slice(0, -1);
  addStr = addStr.split('^').join(options.additionSeparator !== undefined ? options.additionSeparator : '|');

  for (let i=0; i<options.repeatTimes; i++) {
    ans+=str + addStr + (options.separator !== undefined ? options.separator : '+');
  }
  ans = ans.slice(0, ((-1)*(options.separator !== undefined ? options.separator : '+').length));

  return ans;
};
  