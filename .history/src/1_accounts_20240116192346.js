// const {ethers} = require("ethers");

// const INFURA_ID="6a10c6a6a3b44e1e8f2c4671e7a34319";


const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);

// const provider = new ethers.BrowserProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`);


// const address = "0x332417FBb78e0B6EcC806548A89b6a949F29220B";

// const main = async ()=>{
//      const balance = await provider.getBalance(address);

//      console.log(`\nETH balance of ${balance}---> ${ethers.utils.formatEther(balance)}\n`);
// }

// main();


const { ethers } = require("ethers");

    async function main() {
      // Configuring the connection to an Ethereum node
      const network = "Goerli";
      const provider = new ethers.providers.InfuraProvider(
        network,
        "6a10c6a6a3b44e1e8f2c4671e7a34319"
      );
      // Creating a signing account from a private key
      const signer = new ethers.Wallet("5f08a4cda12c46e897c618c3f56429cf", provider);

      // Creating and sending the transaction object
      const tx = await signer.sendTransaction({
        to: "0x332417FBb78e0B6EcC806548A89b6a949F29220B",
        value: ethers.utils.parseUnits("0.001", "ether"),
      });
      console.log("Mining transaction...");
      console.log(`https://${network}.etherscan.io/tx/${tx.hash}`);
      // Waiting for the transaction to be mined
      const receipt = await tx.wait();
      // The transaction is now on chain!
      console.log(`Mined in block ${receipt.blockNumber}`);
    }

//     require("dotenv").config();
    main();