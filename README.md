# Sample Hardhat Project

This project demonstrates how to upgarde smart contract using a proxy contract in local hardhat network.
Try running some of the following tasks:

```CMD
npm install --save-dev hardhat@^2.12.0 @nomicfoundation/hardhat-toolbox@^2.0.0
npm install -D @nomiclabs/hardhat-waffle ethereum-waffle(OPTIONAL install if fails)

require("@nomicfoundation/hardhat-toolbox");//Add this to hardhat.config file
require("@openzeppelin/hardhat-upgrades");//Add this to hardhat.config file
require("@nomicfoundation/hardhat-ethers");////Add this to hardhat.config file *for my case hardhat was not working post declaration 


npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test

npx hardhat node
npx hardhat run scripts/deploy.js


npx hardhat console --network localhost---->To initialize the hardhat console of the local hardhat network.
```
