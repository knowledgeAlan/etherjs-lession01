const {ethers} = require("ethers");

const INFURA_ID="6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const address = "0x332417FBb78e0B6EcC806548A89b6a949F29220B";

const main = async ()=>{
     const balance = await provider.getBalance(address);

     console.log(`\nETH balance of ${balance}---> ${ethers.utils.formatEther(balance)}\n`);
}

main();