const {ethers} = require("ethers");

const INFURA_ID = "";

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);


const account1 = "";
const account2 = "";

const privateKey1 = "";

const wallet =  new  ethers.Wallet(privateKey1,provider);

const ERC20_ABI = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
];

const address = "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844";
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
