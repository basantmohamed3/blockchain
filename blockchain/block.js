"use strict";
const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(timestamp, lastHash, hash, data) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  toString() {
    return `Block -- 
    Timestamp: ${this.timestamp}
    Last Hash: ${this.lastHash.substring(0, 10)}
    Hash: ${this.hash.substring(0, 10)}
    data: ${this.data}`;
  }

  //hash of genesis
  static genesis() {
    return new this("genesis book", "----", "basant-276h", []);
  }
  static mineBlock(lastBlock, data) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = Block.hash(timestamp, lastHash, data);
    return new this(timestamp, lastHash, hash, data);
  }
  static hash(timestamps, lastHash, data) {
    return SHA256(`${timestamps}${lastHash}${data}`).toString();
  }
  static blockHash(block) {
    const { timestamp, data, lastHash } = block;
    return this.hash(timestamp, lastHash, data);
  }
}

module.exports = Block;
