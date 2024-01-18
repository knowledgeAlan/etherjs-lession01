const {ethers}  = require("ethers");

const INFURA_ID = "INFURA_ID";

const provider = new ethers.providers.JsonRpProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);
