const {ethers} = require("ethers");

const INFURA_ID ="6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);