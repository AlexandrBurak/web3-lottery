import { ethers } from "hardhat";

async function main() {
  const lottery = await ethers.deployContract("Lottery");

  const deployed = await lottery.waitForDeployment();

  console.log(
    `Lottery deployed to ${await deployed.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
