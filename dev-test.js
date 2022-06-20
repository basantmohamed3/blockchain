const Block = require("./blockchain/block");
const block = new Block("foo", "bar", "zoo", "baz");
const fooBlock = Block.mineBlock(Block.genesis(), "foo");
