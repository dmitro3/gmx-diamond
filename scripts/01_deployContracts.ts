import hre, { ethers } from "hardhat";

const { FacetList } = require("../libs/facets.ts");
const { getSelectors, FacetCutAction } = require("../libs/diamond.js");

async function main() {
  console.dir(FacetList);
  console.log("");
  const [deployer] = await ethers.getSigners();
  console.log(deployer.address, await deployer.getBalance());

  console.log("Diamond contract is being deployed. 💁‍♂️ Please wait...");
  const gmxpadDiamondFactory = await ethers.getContractFactory("Gmxpad");
  const gmxpadDiamond = await gmxpadDiamondFactory.deploy();
  await gmxpadDiamond.deployed();
  console.log("Diamond contract was deployed successfully. 🤩👍");
  console.log("");

  console.log("GMX token contract is being deployed. 💁‍♂️ Please wait...");
  const gmxTokenFactory = await ethers.getContractFactory("GMXToken");
  const gmxTokenContract = await gmxTokenFactory.deploy(deployer.address);
  await gmxTokenContract.deployed();
  console.log("GMX token contract was deployed successfully. 🤩👍");
  console.log("");

  console.log("XX token contract is being deployed. 💁‍♂️ Please wait...");
  const xxTokenFactory = await ethers.getContractFactory("XXToken");
  const xxTokenContract = await xxTokenFactory.deploy(deployer.address);
  await xxTokenContract.deployed();
  console.log(
    "XX token contract was deployed successfully. 🤩👍",
    xxTokenContract.address
  );
  console.log("");

  const cut = [];
  for (const FacetName of FacetList) {
    const Facet = await ethers.getContractFactory(FacetName);
    // @ts-ignore
    const facet = await Facet.deploy();
    await facet.deployed();
    console.log(`${FacetName} facet deployed 👍 => ${facet.address}`);
    cut.push({
      target: facet.address,
      action: FacetCutAction.Add,
      selectors: getSelectors(facet),
    });
  }

  const addressZero = ethers.constants.AddressZero;
  const tx = await gmxpadDiamond.diamondCut(cut, addressZero, "0x");
  await tx.wait();

  let contractAddresses = new Map<string, string>();
  contractAddresses.set("DIAMOND => ", gmxpadDiamond.address);
  contractAddresses.set("GMX TOKEN => ", gmxTokenContract.address);
  contractAddresses.set("XX TOKEN => ", xxTokenContract.address);
  contractAddresses.set("DEPLOYER => ", deployer.address);
  console.table(contractAddresses);
}
/**
npx hardhat run scripts/01_deployContracts.ts --network chaos
 */
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
