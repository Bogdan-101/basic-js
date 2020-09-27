const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position > this.chain.getLength || position < 0 || !(Number.isInteger(position))) {
      this.chain = [];
      throw new Error('wrong position');
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let ans = this.chain.slice().join('~~');
    this.chain = [];
    return ans;
  }
};

module.exports = chainMaker;
