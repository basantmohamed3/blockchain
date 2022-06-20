const { blockHash } = require("./block");
("use strict");
const Block = require("./block");
console.log(Block);

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const block = Block.mineBlock(this.chain[this.chain.length - 1], data);
    this.chain.push(block);
    return block;
  }
  isValidChain(chain) {
    if (JSON.stringify(chain) !== JSON.stringify(Block.genesis())) return false;
    for (var i = 1; i < chain.length; i++) {
      if (
        chain[i].hash !== chain[i - 1].hash ||
        chain[i].hash !== blockHash.hash(chain[i])
      ) {
        return false;
      }
    }
    return true;
  }
  replaceChain(newChain) {
    if (newChain.length <= this.chain.length) {
      console.log("This chain is not longer than the current chain");
      return;
    } else if (!this.isValidChain(newChain)) {
      console.log("The recieved chain is not valid");
      return;
    }
    console.log("Replacing blockchain with the new chain");
    this.chain = newChain;
  }
}

module.exports = Blockchain;
