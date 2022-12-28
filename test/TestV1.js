const { expect } = require("chai");
require('dotenv').config();

describe('check the Proxy implementation-----', () => { 
  beforeEach(async () => {
    contract = await ethers.getContractFactory("Storage");
    deploy= await upgrades.deployProxy(contract,[8],{initializer:"setValue"});
    const x= process.env.ETHERSCAN_KEY;
    console.log(x);
    console.log("DEPLOYING.......");
  })

  it("check the value from proxy contract-----",async()=>{
    expect((await deploy.getValue()).toString()).to.equal('8');
  })
 })