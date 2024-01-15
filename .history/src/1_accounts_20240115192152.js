const {ethers} = require("ethers");

const INFURA_ID="6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = "6a10c6a6a3b44e1e8f2c4671e7a34319";

const main = async ()=>{
     const balance = await provider.getBalance(address);

     console.log(`\nETH balance of ${balance}---> ${ethers.utils.formatEther(balance)}\n`);
}

main();