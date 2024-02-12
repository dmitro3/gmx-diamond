import { ethers } from "hardhat";
import DiamondABI from "../../artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DiamondABI.json";
import GMXPTokenABI from "../../artifacts/contracts/tokens/GMXPToken.sol/GMXPToken.json";
import XXTokenABI from "../../artifacts/contracts/tokens/XXToken.sol/XXToken.json";

const {
  Amounts,
  AmountMultipliers,
  Times,
  TimeMultiplers,
} = require("../libs/facets.ts");

async function main() {
  const [deployer] = await ethers.getSigners();

  const DIAMOND_CONTRACT = "";
  const GMXP_TOKEN_CONTRACT = "";
  const XX_TOKEN_CONTRACT = "";

  const gmxpadDiamond = await ethers.getContractAt(
    "DiamondABI",
    DIAMOND_CONTRACT
  );
  console.log("Attached Diamond Contract. 👍");
  console.log("");

  const gmxpTokenContract = await ethers.getContractAt(
    "GMXPTokenABI",
    GMXP_TOKEN_CONTRACT
  );
  console.log("Attached GMXP Token Contract. 👍");
  console.log("");

  const xxTokenContract = await ethers.getContractAt(
    "XXTokenABI",
    XX_TOKEN_CONTRACT
  );
  console.log("Attached XX Token Contract. 👍");
  console.log("");

  const addAmounts = await gmxpadDiamond
    .connect(deployer)
    .addAmounts(Amounts, AmountMultipliers);
  await addAmounts.wait();
  console.log("Settled Stake Amounts. 👍");

  const addTimes = await gmxpadDiamond
    .connect(deployer)
    .addTimes(Times, TimeMultiplers);
  await addTimes.wait();
  console.log("Settled Stake Lock Times. 👍");

  const setToken0 = await gmxpadDiamond
    .connect(deployer)
    .setToken0(gmxpTokenContract.address);
  await setToken0.wait();
  console.log("Settled Token0 👍", await gmxpTokenContract.name());

  const setToken1 = await gmxpadDiamond
    .connect(deployer)
    .setToken1(xxTokenContract.address);
  await setToken1.wait();
  console.log("Settled Token1 👍", await xxTokenContract.name());

  const isActive: boolean = true;
  const setPoolActive = await gmxpadDiamond
    .connect(deployer)
    .setPoolActive(isActive);
  await setPoolActive.wait();
  console.log("Pool Status => ", isActive);

  let contractAddresses = new Map<string, string>();
  contractAddresses.set("DIAMOND    => ", gmxpadDiamond.address);
  contractAddresses.set("GMXP TOKEN => ", gmxpTokenContract.address);
  contractAddresses.set("XX TOKEN   => ", xxTokenContract.address);
  contractAddresses.set("DEPLOYER   => ", deployer.address);
  console.table(contractAddresses);
}

/*
npx hardhat run scripts/stake/initStakePool.ts --network nebula-testnet
*/

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
