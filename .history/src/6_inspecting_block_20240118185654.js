const {ethers} = require("ethers");

const INFURA_ID = "6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new  ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);


const main = async ()=>{
    const block = await provider.getBlockNumber();

    console.log(`\n Block Number: ${block}\n`);

    const blockInfo = await provider.getBlock(block);

    console.log(blockInfo);

    const {transactons} = await provider.getBlockWithTransactions(block);

    console.log(`\nLogging first transaction in block :\n`);

    console.log(transactons[0]);

}

main();