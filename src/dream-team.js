const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(typeof((members) !== 'object' || members === null) && Array.isArray(members) === false)
    return false;
  let arr = [];
  members.forEach(element => {
    if(typeof(element) === 'string')
      arr.push(element.trim()[0].toUpperCase());
  });
  if(arr.length === 0)
    return false;
  return arr.sort().join('');
};
