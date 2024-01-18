const {ethers} = require("ethers");

const INFRURA_ID = "6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new ethers.ProvidersJsonProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);


const account1 = "";
const account2 = "";

const privateKey1 = "";

const wallet =  new  ethers.Wallet(privateKey1,provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to,uint  amount) returns (bool) ",
];


const address = "";
const contract = new ethers.Contract(address,ERC20_ABI,provider);

const main = async ()=>{
    const balance = await contract.balanceOf(account1);

    console.log(`\n Reading from ${address}`);
    console.log(`Balance of sender : ${balance}\n`);


    const contractWithWallet = contract.connect(wallet);

    const tx = await contractWithWallet.transfer(account2,balance);

    await tx.wait();

    console.log(tx);

    const balanceOfSender = await contract.balanceOf(account1);
    const balanceOfReciever = await contract.balanceOf(account2);


    console.log(`\n Balance of sender : ${balanceOfSender}`);
    console.log(`\n Balance of reciever : ${balanceOfReciever}`);
}

main();