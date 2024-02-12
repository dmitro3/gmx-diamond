import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";

const {
  FacetList,
  Amounts,
  AmountMultipliers,
  Times,
  TimeMultiplers,
} = require("../libs/facets.ts");
const { getSelectors, FacetCutAction } = require("../libs/diamond.js");

describe("STAKE TEST", function () {
  async function deployContracts() {
    const [owner, otherAccount, otherAccount1, otherAccount2] =
      await ethers.getSigners();

    const gmxpadDiamondFactory = await ethers.getContractFactory("Gmxpad");
    const gmxpadDiamond = await gmxpadDiamondFactory.deploy();
    await gmxpadDiamond.deployed();

    const cut = [];
    for (const FacetName of FacetList) {
      const Facet = await ethers.getContractFactory(FacetName);
      // @ts-ignore
      const facet = await Facet.deploy();
      await facet.deployed();
      cut.push({
        target: facet.address,
        action: FacetCutAction.Add,
        selectors: getSelectors(facet),
      });
    }

    const tx = await gmxpadDiamond.diamondCut(
      cut,
      ethers.constants.AddressZero,
      "0x"
    );
    await tx.wait();

    const gmxpTokenFactory = await ethers.getContractFactory("GMXPToken");
    const gmxpTokenContract = await gmxpTokenFactory.deploy(owner.address);
    await gmxpTokenContract.deployed();

    const xxTokenFactory = await ethers.getContractFactory("XXToken");
    const xxTokenContract = await xxTokenFactory.deploy(owner.address);
    await xxTokenContract.deployed();

    const stakeFacet = await ethers.getContractAt(
      "Stake",
      gmxpadDiamond.address
    );
    const queryFacet = await ethers.getContractAt(
      "StakeQuery",
      gmxpadDiamond.address
    );
    const settingFacet = await ethers.getContractAt(
      "Setting",
      gmxpadDiamond.address
    );

    const addAmounts = await settingFacet
      .connect(owner)
      .addAmounts(Amounts, AmountMultipliers);
    await addAmounts.wait();

    const addTimes = await settingFacet
      .connect(owner)
      .addTimes(Times, TimeMultiplers);
    await addTimes.wait();

    const setToken0 = await settingFacet
      .connect(owner)
      .setToken0(gmxpTokenContract.address);
    await setToken0.wait();

    const setToken1 = await settingFacet
      .connect(owner)
      .setToken1(xxTokenContract.address);
    await setToken1.wait();

    const setPoolActive = await settingFacet.connect(owner).setPoolActive(true);
    await setPoolActive.wait();

    const gmxpLiqAmount = ethers.utils.parseEther("1000000");
    const xxLiqAmount = ethers.utils.parseEther("1000000");

    const approveGMXP = await gmxpTokenContract
      .connect(owner)
      .approve(gmxpadDiamond.address, gmxpLiqAmount);
    await approveGMXP.wait();

    const approveXX = await xxTokenContract
      .connect(owner)
      .approve(gmxpadDiamond.address, xxLiqAmount);
    await approveXX.wait();

    const gmxAddLiq = await stakeFacet
      .connect(owner)
      .addToken0Liquidity(gmxpLiqAmount);
    await gmxAddLiq.wait();

    const xxAddLiq = await stakeFacet
      .connect(owner)
      .addToken1Liquidity(xxLiqAmount);
    await xxAddLiq.wait();

    return {
      stakeFacet,
      queryFacet,
      settingFacet,
      gmxpadDiamond,
      gmxpTokenContract,
      xxTokenContract,

      // users
      owner,
      otherAccount,
      otherAccount1,
      otherAccount2,
    };
  }

  describe("Participation in Staking Pool => ", function () {
    it("Stake & Rewards => ", async function () {
      const {
        stakeFacet,
        queryFacet,
        settingFacet,
        gmxpadDiamond,
        gmxpTokenContract,
        xxTokenContract,
        owner,
        otherAccount,
        otherAccount1,
        otherAccount2,
      } = await loadFixture(deployContracts);

      const approveGMPXTokens = await gmxpTokenContract
        .connect(owner)
        .approve(gmxpadDiamond.address, Amounts[0]);
      await approveGMPXTokens.wait();

      const stake = await stakeFacet.connect(owner).stake(Amounts[0], Times[0]);
      await stake.wait();
      console.log("");
      console.log("Staked 👍", ethers.utils.formatEther(Amounts[0]), "$GMXP");
      const ownerInfo = await queryFacet.getUserInfo(owner.address);
      const ownerPeriodInfo = await queryFacet.getUserStakePeriod(
        1,
        owner.address
      );
      expect(ownerInfo[2]).to.be.equal(Amounts[0]);
      expect(ownerPeriodInfo[4]).to.be.equal(Amounts[0]);

      const calculateRewardsForOwner = await stakeFacet.calculateRewards(
        owner.address
      );
      console.log(
        "Staked Time = Current Time Rewards => ",
        calculateRewardsForOwner
      );
      const poolInfo = await queryFacet.getPoolInfo();
      console.log(
        "Token0 Reward Per Seconds => ",
        ethers.utils.formatEther(poolInfo[5])
      );
      const currentTime = await time.latest();
      await time.increaseTo(currentTime + 100);
      const calculateRewardsForOwner1 = await stakeFacet.calculateRewards(
        owner.address
      );
      console.log(
        "Current Time + 100 sec, Rewards => ",
        ethers.utils.formatEther(calculateRewardsForOwner1[0]),
        ethers.utils.formatEther(calculateRewardsForOwner1[1])
      );
      await time.increaseTo(currentTime + currentTime);

      const calculateRewardsForOwner2 = await stakeFacet.calculateRewards(
        owner.address
      );
      console.log(
        "Current Time + Current Time, Rewards => ",
        ethers.utils.formatEther(calculateRewardsForOwner2[0]),
        ethers.utils.formatEther(calculateRewardsForOwner2[1])
      );
    });

    it("Claim & Rewards => ", async function () {
      const {
        stakeFacet,
        queryFacet,
        settingFacet,
        gmxpadDiamond,
        gmxpTokenContract,
        xxTokenContract,
        owner,
        otherAccount,
        otherAccount1,
        otherAccount2,
      } = await loadFixture(deployContracts);

      const approveGMPXTokens = await gmxpTokenContract
        .connect(owner)
        .approve(gmxpadDiamond.address, Amounts[0]);
      await approveGMPXTokens.wait();

      const stake = await stakeFacet.connect(owner).stake(Amounts[0], Times[0]);
      await stake.wait();
      const ownerInfo = await queryFacet.getUserInfo(owner.address);
      const ownerPeriodInfo = await queryFacet.getUserStakePeriod(
        1,
        owner.address
      );
      expect(ownerInfo[2]).to.be.equal(Amounts[0]);
      expect(ownerPeriodInfo[4]).to.be.equal(Amounts[0]);

      console.log(
        "Before Claim Balances => ",
        ethers.utils.formatEther(
          await gmxpTokenContract.balanceOf(owner.address)
        ),
        ethers.utils.formatEther(await xxTokenContract.balanceOf(owner.address))
      );
      const currentTime = await time.latest();
      await time.increaseTo(currentTime + 100);

      const claimRewards0 = await stakeFacet.connect(owner).claimRewards();
      await claimRewards0.wait();

      console.log(
        "After Claim Balances => ",
        ethers.utils.formatEther(
          await gmxpTokenContract.balanceOf(owner.address)
        ),
        ethers.utils.formatEther(await xxTokenContract.balanceOf(owner.address))
      );
      const currentTime2 = await time.latest();
      await time.increaseTo(currentTime2 + 10);
      const calculateRewardsForOwner = await stakeFacet.calculateRewards(
        owner.address
      );
      console.log(
        "After Claim + 10 sec, Rewards => ",
        ethers.utils.formatEther(calculateRewardsForOwner[0]),
        ethers.utils.formatEther(calculateRewardsForOwner[1])
      );
    });

    it("Unstake Request & Withdraw => ", async function () {
      const {
        stakeFacet,
        queryFacet,
        settingFacet,
        gmxpadDiamond,
        gmxpTokenContract,
        xxTokenContract,
        owner,
        otherAccount,
        otherAccount1,
        otherAccount2,
      } = await loadFixture(deployContracts);

      const approveGMPXTokens = await gmxpTokenContract
        .connect(owner)
        .approve(gmxpadDiamond.address, Amounts[0]);
      await approveGMPXTokens.wait();

      const stake = await stakeFacet.connect(owner).stake(Amounts[0], Times[0]);
      await stake.wait();
      const ownerInfo = await queryFacet.getUserInfo(owner.address);
      const ownerPeriodInfo = await queryFacet.getUserStakePeriod(
        1,
        owner.address
      );
      expect(ownerInfo[2]).to.be.equal(Amounts[0]);
      expect(ownerPeriodInfo[4]).to.be.equal(Amounts[0]);

      console.log(
        "Before Claim Balances => ",
        ethers.utils.formatEther(
          await gmxpTokenContract.balanceOf(owner.address)
        ),
        ethers.utils.formatEther(await xxTokenContract.balanceOf(owner.address))
      );
      const currentTime = await time.latest();
      await time.increaseTo(currentTime + 100);

      const claimRewards0 = await stakeFacet.connect(owner).claimRewards();
      await claimRewards0.wait();

      console.log(
        "After Claim Balances => ",
        ethers.utils.formatEther(
          await gmxpTokenContract.balanceOf(owner.address)
        ),
        ethers.utils.formatEther(await xxTokenContract.balanceOf(owner.address))
      );
      const currentTime2 = await time.latest();
      await time.increaseTo(currentTime2 + 10);
      const calculateRewardsForOwner = await stakeFacet.calculateRewards(
        owner.address
      );
      console.log(
        "After Claim + 10 sec, Rewards => ",
        ethers.utils.formatEther(calculateRewardsForOwner[0]),
        ethers.utils.formatEther(calculateRewardsForOwner[1])
      );
      console.log("");
      await time.increaseTo(currentTime + Times[0]);
      console.log("Current Time = User Stake End Time");

      const userTierInfo = await queryFacet
        .connect(owner)
        .getUserStakeList(owner.address);

      const unstakeRequest = await stakeFacet
        .connect(owner)
        .withdrawRequest(userTierInfo[0]);
      await unstakeRequest.wait();
      console.log("Withdraw Request.");

      const userTierPeriod = await queryFacet
        .connect(owner)
        .getUserStakePeriod(userTierInfo[0], owner.address);

      expect(userTierPeriod[0]).true.be.equal(true);

      await time.increaseTo((await time.latest()) + 1296000);
      console.log("Current Time = User Stake Request End Time");

      const withdraw = await stakeFacet
        .connect(owner)
        .withdraw(userTierInfo[0]);
      await withdraw.wait();
      console.log("Withdraw.");
    });
  });
});
