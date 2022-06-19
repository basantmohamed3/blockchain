const { blockHash } = require("./block");
const Block = require("./block");
class BlockChain {
  consturctor() {
    console.log(Block.genesis());
    this.chain = [Block.genesis()];
  }

  addBlock(data) {
    const lastBlock = this.chain[this.chain.length - 1];
    const block = Block.mineBlock(lastBlock, data);
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
  replaceChain(newChain) {}
}

module.exports = BlockChain;
