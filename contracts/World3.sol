// SPDX-License-Identifier: MIT
// SPDX-IGNORE-DUE-TO-MISMATCH
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/KeeperCompatibleInterface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";

contract DonationContract is VRFConsumerBase, KeeperCompatibleInterface {
  struct Donation {
    string name;
    string description;
    uint256 goal;
    uint256 amountRaised;
    uint256 toGo;
    string[] pictures;
    string category;
    uint256[] donorAmounts; // Array to store the donation amounts
    uint256[] donationIds; // Array to store the donation IDs
    uint256 startTime;
    uint256 endTime;
  }

  mapping(address => uint256[]) private userDonations; // Mapping to store user donations
  mapping(uint256 => Donation) public donations;
  uint256 public donationCount;

  // Chainlink Price Feed variables
  AggregatorV3Interface internal priceFeed;

  // Chainlink VRF variables
  bytes32 internal keyHash;
  uint256 internal fee;
  uint256 public randomResult;

  // Chainlink Keepers variables
  uint256 public constant MIN_THRESHOLD_PERCENTAGE = 50;
  uint256 public donationAccumulated;
  uint256 public constant THRESHOLD = 100; // Placeholder threshold value
  // Chainlink Alarm Clock variables
  uint256 public endTime;

  constructor(
    address _priceFeedAddress,
    address _vrfCoordinator,
    address _linkToken,
    bytes32 _keyHash,
    uint256 _fee
  ) VRFConsumerBase(_vrfCoordinator, _linkToken) {
    priceFeed = AggregatorV3Interface(_priceFeedAddress);
    keyHash = _keyHash;
    fee = _fee;
  }

  // Admin functions

  function createDonation(
    string memory _name,
    string memory _category,
    uint256 _goal,
    string[] memory _pictures,
    uint256 _startTime,
    uint256 _endTime
  ) public onlyOwner {
    require(_startTime < _endTime, "Invalid start and end time");
    Donation storage newDonation = donations[donationCount];
    newDonation.name = _name;
    newDonation.goal = _goal;
    newDonation.amountRaised = 0;
    newDonation.toGo = _goal;
    newDonation.pictures = _pictures;
    newDonation.category = _category;
    newDonation.startTime = _startTime;
    newDonation.endTime = _endTime;
    donationCount++;
  }

  function editDonation(
    uint256 _donationId,
    string memory _name,
    uint256 _goal,
    string[] memory _pictures,
    string memory _category,
    uint256 _startTime,
    uint256 _endTime
  ) public onlyOwner donationExists(_donationId) {
    require(_startTime < _endTime, "Invalid start and end time");
    Donation storage donation = donations[_donationId];
    donation.name = _name;
    donation.goal = _goal;
    donation.pictures = _pictures;
    donation.category = _category;
    donation.startTime = _startTime;
    donation.endTime = _endTime;
  }

  function hideDonation(uint256 _donationId) public onlyOwner donationExists(_donationId) {
    delete donations[_donationId];
  }

  // User functions

  function addDonation(uint256 _donationId, uint256 _amount) public donationExists(_donationId) {
    Donation storage donation = donations[_donationId];
    require(block.timestamp >= donation.startTime, "Donation campaign has not started");
    require(block.timestamp <= donation.endTime, "Donation campaign has ended");
    donation.amountRaised += _amount;
    donation.toGo = donation.goal - donation.amountRaised;
    donation.donorAmounts.push(_amount);
    donation.donors.push(msg.sender);

    // Store the donation ID for the user
    userDonations[msg.sender].push(_donationId);

    if (donation.amountRaised >= (donation.goal * MIN_THRESHOLD_PERCENTAGE) / 100) {
      // Trigger Chainlink Keepers function
      donationAccumulated += donation.amountRaised;
    }
  }

  function getDonations() public view returns (Donation[] memory) {
    Donation[] memory allDonations = new Donation[](donationCount);
    for (uint256 i = 0; i < donationCount; i++) {
      Donation storage donation = donations[i];
      uint256[] memory donorAmounts = new uint256[](donation.donors.length);
      for (uint256 j = 0; j < donation.donors.length; j++) {
        donorAmounts[j] = donation.donorAmounts[j];
      }
      allDonations[i] = Donation(
        donation.name,
        donation.description,
        donation.goal,
        donation.amountRaised,
        donation.toGo,
        donation.pictures,
        donation.category,
        donorAmounts,
        donation.donationIds,
        donation.startTime,
        donation.endTime
      );
    }
    return allDonations;
  }

  function getDonation(uint256 _donationId) public view returns (Donation memory) {
    require(_donationId < donationCount, "Donation does not exist");
    return donations[_donationId];
  }

  function getUserDonations(address _user) public view returns (Donation[] memory) {
    uint256[] memory userDonationIds = userDonations[_user];
    Donation[] memory userDonationList = new Donation[](userDonationIds.length);
    for (uint256 i = 0; i < userDonationIds.length; i++) {
      userDonationList[i] = donations[userDonationIds[i]];
    }
    return userDonationList;
  }

  // Chainlink Price Feed functions

  function getDonationValueInUSD(uint256 _donationId) public view returns (uint256) {
    Donation storage donation = donations[_donationId];
    (, int256 price, , , ) = priceFeed.latestRoundData();
    return (donation.amountRaised * uint256(price)) / 1e8;
  }

  // Rest of the contract...
  
  // Modifier to check if the donation exists
  modifier donationExists(uint256 _donationId) {
    require(_donationId < donationCount, "Donation does not exist");
    _;
  }

  // Modifier to check if the caller is the contract owner
  modifier onlyOwner() {
    require(msg.sender == owner(), "Caller is not the owner");
    _;
  }

  // Function to get the contract owner's address
  function owner() public view returns (address) {
    return msg.sender;
  }
}
