const {ethers}  = require("ethers");

const INFURA_ID="";
const provider = new ethers.Provider.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);