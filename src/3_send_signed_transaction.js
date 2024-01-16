const {ethers} = require("ethers");

const INFURA_ID ="6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

const account1 = "account1";
const account2 = "account2";

const privateKey1 = "";
const wallet = new ethers.wallet(privateKey1,provider);


const main = async ()=>{

    const senderBalanceBefore = await provider.getBalance(account1);
    const receiverBalanceBefore = await provider.getBalance(account2);

    console.log(`\n Sender balance before :${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`Reciever balance before: ${ethers.utils.formatEther(receiverBalanceBefore)}\n `);




    const tx = await wallet.sendTransaction({
            to:account2,
            value: ethers.utils.parseEther("0.25")
    });


    await tx.wait();

    console.log(tx);

    const senderBalanceAfter = await provider.getBalance(account1);
    const recieverBalanceAfter = await provider.getBalance(account2);


    console.log(`\n Sender balance after : ${ethers.utils.formatEther(senderBalanceAfter)}`);
    console.log(`Reciever balance after : ${ethers.utils.formatEther(recieverBalanceAfter)} \n`);

}