// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import { ItemType } from "./Enums.sol";

// stake
    struct TPoolInitParams {
        uint256 minimumStakeAmount;
        uint256 maximumStakeAmount;
        uint256 minimumLockTime;
        uint256 maximumLockTime;
        uint256 requestCliffTime;
    }
    struct TStakeTierSection{
        bool receivable;

        uint256 indexID;
        uint256 enterTime;
        uint256 exitTime; // request end time
        uint256 stakeAmount;
        uint256 userScore;
        uint256 endTime; // stake end time
        uint256 tierMultipler;
    }

    struct TChangeCountIndex{
        bool canWinPrizesToken0;
        bool canWinPrizesToken1;

        uint256 chcTotalPoolScore;

        uint256 chcStartTime;
        uint256 chcEndTime;

        uint256 chcToken0RewardPerTime;
        uint256 chcToken0DistributionEndTime;

        uint256 chcToken1RewardPerTime;
        uint256 chcToken1DistributionEndTime;        
    }

    struct TUser {
        bool staker;

        uint256 userChangeCountIndex;
        uint256 userTotalStakeAmount;
        uint256 userTotalScore;
        uint256 userStakeTierCount;
        uint256 userEarnedToken0Amount;
        uint256 userEarnedToken1Amount;

        uint256[] userStakeTierSections;
    }

    struct TStakePoolInfo {
        bool isActive;

        uint256 lastCHCIndex;
        uint256 numberOfStakers;

        uint256 totalStakedToken;
        uint256 poolTotalScore;

        uint256 poolToken0RewardPerTime;
        uint256 poolDistributedToken0Reward;
        uint256 poolToken0DistributionEndTime;
        uint256 poolToken0Liquidity;

        uint256 poolToken1RewardPerTime;
        uint256 poolDistributedToken1Reward;
        uint256 poolToken1DistributionEndTime;
        uint256 poolToken1Liquidity;

        address token0;
        address token1;
    }

// launchapd
   struct TSocials{
        string web;
        string twitter;
        string medium;
        string discord;
    }

    struct TDetails{
        string slug;
        string projectName;
        string tokenName;
        string tokenSymbol;
        string chainName;
        string developer;
        string status;
        string description;
        string announcement;
        string listing;

        string image;
        string backgroundImage;

        string[] genre;
        string[] platforms;
    }

    struct TLaunchpad{
        bool isExist; // proje var mı?
        bool isUpcoming; // proje upcoming mi?
        bool isRefundable; // proje refund yapılabilir mi?
        bool isVesting;
        bool isNFT;

        TDetails details;
        TSocials socials;

        uint256 projectID; // projenin diamond kontrattaki id'si
        uint256 chainID; // vesting chain id

        uint256 tokenPrice;
        uint256 fee;

        uint256 userCount; // deposit yapan kullanıcılar

        uint256 collectedValue; // toplanan value (para)

        uint256 tokensToBeSold; // satılacak tokenlar
        uint256 soldTokens; // satılan tokenlar
        uint256 sharePerUser; // kullanici basina dusen pay (erc1155 ise)

        uint256 poolScore; // kayıt olan kullanıcıların toplam pool score'u

        uint256 minDepositAmount;
        uint256 maxDepositAmount; // public satis icin

        uint256 registerStart; // stakerlar için kayıt olma süresinin baslangıcı
        uint256 registerEnd;

        uint256 privateDepositStart; // kayıt olan kullancıların deposit suresinin baslangıcı
        uint256 privateDepositEnd;

        uint256 publicDepositStart; // tüm kullanıcılar için deposit suresinin baslangıcı
        uint256 publicDepositEnd;

        uint256 claimStart; // claimin başlangıç zamanı (vesting kontratı icin)

        address tokenAddress; // satılacak token address,
        address usedTokenAddress; // satıs icin kabul edilebilir token addressi usdt - wrapped address
        address vestingContract; // vesting contract deploy alındindiktan sonra girilecek (önyüz icin)

        address[] users; // kullanici listesi
    }

    struct TLaunchpadUser{
        bool userRegistered;
        bool userDeposited;
        uint256 userScore;
        uint256 userDepositedValue;
        uint256 userTokensToReceive;
    }


// vesting

    struct TVesting{
        bool isRefundable;
        bool isRefund;

        ItemType tokenType;

        uint256 projectID;
        uint256 refundEndTime;
        uint256 claimStartTime;

        uint256 remainingTokens;
        uint256 claimedTokens;

        uint256 refundedAmount;

        uint256[] vestingPeriod;
        uint256[] periodClaim;

        address tokenAddress;

        address[] refundedUsers;
        address[] userList;
    }

    struct TVestingUser{
        bool isExist;
        bool userRefunded;

        uint256 userAllowedTokenID;

        uint256 userRefundedAmount; 
        uint256 userWithdrawnAmount;
        uint256 userReceivedAmount;
        
        address userAddress;
    }


