const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(act) {
  if (typeof(act) !== 'string' || act <= 0 || act >= MODERN_ACTIVITY || act.length > 2)
    return false;
  
  return Math.ceil(Math.log(MODERN_ACTIVITY/act)/(0.693/ HALF_LIFE_PERIOD));
};
