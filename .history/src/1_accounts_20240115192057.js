const {ethers} = require("ethers");

const INFURA_ID="";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = "";

const main = async ()=>{
     const balance = await provider.getBalance(address);

     console.log(`\nETH balance of ${balance}---> ${ethers.utils.formatEther(balance)}\n`);
}

main();