const {ethers} = require("ethers");

const INFRURA_ID = "";

const provider = new ethers.ProvidersJsonProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);