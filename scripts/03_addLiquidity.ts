import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  const DIAMOND_CONTRACT = "diamond";
  const GMX_TOKEN_CONTRACT = "token0";
  const XX_TOKEN_CONTRACT = "token1";

  console.log("Diamond contract is being attach. 💁‍♂️ Please wait...");
  const gmxpadDiamondFactory = await ethers.getContractFactory("Gmxpad");
  const gmxpadDiamond = await gmxpadDiamondFactory.attach(DIAMOND_CONTRACT);
  await gmxpadDiamond.deployed();
  console.log("Diamond contract was attached successfully. 🤩👍");
  console.log("");

  console.log("GMX token contract is being attach. 💁‍♂️ Please wait...");
  const gmxTokenFactory = await ethers.getContractFactory("GMXToken");
  const gmxTokenContract = await gmxTokenFactory.attach(GMX_TOKEN_CONTRACT);
  await gmxTokenContract.deployed();
  console.log("GMX token contract was attached successfully. 🤩👍");
  console.log("");

  console.log("XX token contract is being attach. 💁‍♂️ Please wait...");
  const xxTokenFactory = await ethers.getContractFactory("XXToken");
  const xxTokenContract = await xxTokenFactory.attach(XX_TOKEN_CONTRACT);
  await xxTokenContract.deployed();
  console.log("XX token contract was attached successfully. 🤩👍");
  console.log("");

  const stakeFacet = await ethers.getContractAt("Stake", DIAMOND_CONTRACT);

  //   const liquidityAmount = ethers.utils.parseEther("1000");
  //   const approveGMXP = await gmxTokenContract
  //     .connect(deployer)
  //     .approve(gmxpadDiamond.address, liquidityAmount);
  //   await approveGMXP.wait();
  //   const approveXX = await xxTokenContract
  //     .connect(deployer)
  //     .approve(gmxpadDiamond.address, liquidityAmount);
  //   await approveXX.wait();

  //   const gmxAddLiq = await gmxpadDiamond
  //     .connect(deployer)
  //     .addToken0Liquidity(liquidityAmount);
  //   await gmxAddLiq.wait();
  //   const xxAddLiq = await gmxpadDiamond
  //     .connect(deployer)
  //     .addToken1Liquidity(liquidityAmount);
  //   await xxAddLiq.wait();

  let contractAddresses = new Map<string, string>();
  contractAddresses.set("DIAMOND", gmxpadDiamond.address);
  contractAddresses.set("GMX TOKEN", gmxTokenContract.address);
  contractAddresses.set("XX TOKEN", xxTokenContract.address);
  contractAddresses.set("DEPLOYER", deployer.address);
  console.table(contractAddresses);
}
/**
npx hardhat run scripts/03_addLiquidity.ts --network chaos
 */
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
