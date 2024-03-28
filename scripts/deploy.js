const { BaseContract } = require("ethers");
const hre = require("hardhat");

async function main() {
    const Tracking = await hre.ethers.getContractFactory("Tracking");
    const tracking = Tracking.deploy();

    (await tracking).deploymentTransaction;
    
    console.log('Tracking deployed to', (await tracking).runner.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});