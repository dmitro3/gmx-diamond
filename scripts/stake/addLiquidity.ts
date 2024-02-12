import { ethers } from "hardhat";
import DiamondABI from "../../artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DiamondABI.json";
import GMXPTokenABI from "../../artifacts/contracts/tokens/GMXPToken.sol/GMXPToken.json";
import XXTokenABI from "../../artifacts/contracts/tokens/XXToken.sol/XXToken.json";

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

  const gmxpLiqAmount = ethers.utils.parseEther("1000000");
  const xxLiqAmount = ethers.utils.parseEther("1000000");

  const approveGMXP = await gmxpTokenContract
    .connect(deployer)
    .approve(gmxpadDiamond.address, gmxpLiqAmount);
  await approveGMXP.wait();
  console.log("Approved $GMXP Tokens => ", gmxpLiqAmount);

  const approveXX = await xxTokenContract
    .connect(deployer)
    .approve(gmxpadDiamond.address, xxLiqAmount);
  await approveXX.wait();
  console.log("Approved $XX Tokens => ", xxLiqAmount);

  const gmxAddLiq = await gmxpadDiamond
    .connect(deployer)
    .addToken0Liquidity(gmxpLiqAmount);
  await gmxAddLiq.wait();
  console.log("Added $GMXP Tokens => ", gmxpLiqAmount);

  const xxAddLiq = await gmxpadDiamond
    .connect(deployer)
    .addToken1Liquidity(xxLiqAmount);
  await xxAddLiq.wait();
  console.log("Added $XX Tokens => ", xxLiqAmount);

  let contractAddresses = new Map<string, string>();
  contractAddresses.set("DIAMOND    => ", gmxpadDiamond.address);
  contractAddresses.set("GMXP TOKEN => ", gmxpTokenContract.address);
  contractAddresses.set("XX TOKEN   => ", xxTokenContract.address);
  contractAddresses.set("DEPLOYER   => ", deployer.address);
  console.table(contractAddresses);
}

/*
npx hardhat run scripts/stake/addLiquidity.ts --network nebula-testnet
*/

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
