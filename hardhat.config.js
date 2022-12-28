require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require('dotenv').config();

// require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "goerli",
  // networks: {
  //   goerli: {
  //     url: process.env.API_URL,
  //     accounts: [process.env.PRIVATE_KEY]
  //   }
  // },
  //   etherscan: {
  //     apiKey: process.env.ETHERSCAN_KEY
  // }
}


