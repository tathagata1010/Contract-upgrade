const { ethers, upgrades } = require("hardhat");
async function main() {
  const contract = await ethers.getContractFactory("Storage");
  console.log("Deploying the smart contract");
  const dep = await upgrades.deployProxy(contract, [8], {
    initializer: "setValue",
  });
  console.log("Transaction hash: ",dep.deployTransaction.hash);
  await dep.deployed();

  console.log(`DEPLOYED Contract TO THE ADDRESS: ${dep.address}`);
  
}
main();
