const {ethers} = require("ethers");

const INFRURA_ID = "6a10c6a6a3b44e1e8f2c4671e7a34319";

const provider = new ethers.ProvidersJsonProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);


const account1 = "account1";
const account2 = "account2";

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
}