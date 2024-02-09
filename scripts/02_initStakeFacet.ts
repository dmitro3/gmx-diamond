import hre, { ethers } from "hardhat";
import DiamondABI from "../artifacts/hardhat-diamond-abi/HardhatDiamondABI.sol/DiamondABI.json";
import GMXTokenABI from "../artifacts/contracts/tokens/GMXToken.sol/GMXToken.json";
import XXTokenABI from "../artifacts/contracts/tokens/XXToken.sol/XXToken.json";

async function main() {
  const [deployer] = await ethers.getSigners();

  const DIAMOND_CONTRACT = "diamond";
  const GMX_TOKEN_CONTRACT = "token0";
  const XX_TOKEN_CONTRACT = "token1";

  console.log("Diamond contract is being attach. 💁‍♂️ Please wait...");
  const gmxpadDiamondFactory = await ethers.getContractFactory("DiamondABI");
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

  const stakeFacet = await ethers.getContractAt("Setting", DIAMOND_CONTRACT);

  const Amounts = [
    ethers.utils.parseEther("40000"),
    ethers.utils.parseEther("60000"),
    ethers.utils.parseEther("80000"),
    ethers.utils.parseEther("100000"),
    ethers.utils.parseEther("120000"),
    ethers.utils.parseEther("140000"),
    ethers.utils.parseEther("160000"),
    ethers.utils.parseEther("180000"),
    ethers.utils.parseEther("200000"),
    ethers.utils.parseEther("220000"),
    ethers.utils.parseEther("320000"),
    ethers.utils.parseEther("420000"),
    ethers.utils.parseEther("520000"),
    ethers.utils.parseEther("620000"),
    ethers.utils.parseEther("720000"),
    ethers.utils.parseEther("820000"),
    ethers.utils.parseEther("920000"),
    ethers.utils.parseEther("1000000"),
  ];

  const AmountMultipliers = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400, 450,
    500,
  ];

  const Times: number[] = [
    2678400, 7862400, 15638400, 31190400, 62294400, 93398400, 124502400,
    155606400,
  ];

  const TimeMultiplers = [10, 15, 20, 40, 80, 120, 160, 200];

  const addAmounts = await stakeFacet
    .connect(deployer)
    .addAmounts(Amounts, AmountMultipliers);
  await addAmounts.wait();

  const addTimes = await stakeFacet
    .connect(deployer)
    .addTimes(Times, TimeMultiplers);
  await addTimes.wait();

  const setToken0 = await stakeFacet
    .connect(deployer)
    .setToken0(gmxTokenContract.address);
  await setToken0.wait();

  const setToken1 = await stakeFacet
    .connect(deployer)
    .setToken1(xxTokenContract.address);
  await setToken1.wait();

  const setPoolActive = await stakeFacet.connect(deployer).setPoolActive(true);
  await setPoolActive.wait();

  let contractAddresses = new Map<string, string>();
  contractAddresses.set("DIAMOND", gmxpadDiamond.address);
  contractAddresses.set("GMX TOKEN", gmxTokenContract.address);
  contractAddresses.set("XX TOKEN", xxTokenContract.address);
  contractAddresses.set("DEPLOYER", deployer.address);
  console.table(contractAddresses);
}
/**
npx hardhat run scripts/02_initStakeFacet.ts --network chaos
 */
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
