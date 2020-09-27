const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(value) {
    if (value === false)
      this.value = false;
    else
      this.value = true;
  }

  encrypt(str, key) {
    str = str.toLowerCase();
    key = key.toLowerCase();
    var ans = '';
    let j=0;
    for(let i=0; i<str.length; i++) {
      if (str[i] === ' ') {
        ans+=' ';
        continue;
      }
      if(str[i].charCodeAt(0) > 122 || str[i].charCodeAt(0) < 97) {
        ans+=str[i];
        
        continue;
      }
      let a = (str[i].charCodeAt(0)-96 + key[j%key.length].charCodeAt(0)-97);
      if (a>26)
        a = a%26;
      a+=96;
      ans += String.fromCharCode(a);
      j++;
    }

    if (this.value === true)
      return ans.toUpperCase();
    else 
      return ans.split('').reverse().join('').toUpperCase();
  }    
  decrypt(str, key) {
    str = str.toLowerCase();
    key = key.toLowerCase();
    var ans = '';
    let j=0;
    for(let i=0; i<str.length; i++) {
      if (str[i] === ' ') {
        ans+=' ';
        continue;
      }
      if(str[i].charCodeAt(0) > 122 || str[i].charCodeAt(0) < 97) {
        ans+=str[i];
        continue;
      }
      let a = (str[i].charCodeAt(0)-96 - (key[j%key.length].charCodeAt(0)-97));
      if (a < 1)
      	a = 26 + a;
      if (a>26)
        a = a%26;
      a+=96;
      ans += String.fromCharCode(a);
      j++;
    }

    if (this.value === true)
      return ans.toUpperCase();
    else 
      return ans.split('').reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
