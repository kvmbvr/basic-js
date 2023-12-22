const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    this.alphabet =  [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    this.result = "";
  }

  encrypt(message, key) {
    if (arguments.length < 2 || arguments[0] === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.includes(char)) {
        const messageIndex = this.alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
        const encryptedIndex = (messageIndex + keyIndexInAlphabet) % this.alphabet.length;
        result += this.alphabet[encryptedIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    this.result = this.bool ? result : result.split("").reverse().join("");
    return this.result;
  }

  decrypt(message, key) {
    if (arguments.length < 2 || arguments[0] === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.includes(char)) {
        const messageIndex = this.alphabet.indexOf(char);
        const keyChar = key[keyIndex % key.length];
        const keyIndexInAlphabet = this.alphabet.indexOf(keyChar);
        const decryptedIndex = (messageIndex - keyIndexInAlphabet + this.alphabet.length) % this.alphabet.length;
        result += this.alphabet[decryptedIndex];
        keyIndex++;
      } else {
        result += char;
      }
    }

    this.result = this.bool ? result : result.split("").reverse().join("");
    return this.result;
  }
}

const print = new VigenereCipheringMachine();

console.log(print.encrypt("UWJJW XAGWLNFM VNNNDXHVWWL :)", "js"));


module.exports = {
  VigenereCipheringMachine,
};
