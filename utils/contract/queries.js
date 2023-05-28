import { BigNumber, ethers } from "ethers";
import { contract } from "./index";
import { toEth } from "./ether-utils";

export async function createDonation(
  name,
  description,
  goal,
  pictures,
  category,
  startTime,
  endTime
) {
  try {
    const contractObj = await contract(); // Assuming you have a contract function to get the contract instance
    const data = await contractObj.createDonation(
      name,
      description,
      goal,
      pictures,
      category,
      startTime,
      endTime
    );

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function editDonation(
  donationId,
  name,
  goal,
  pictures,
  category,
  startTime,
  endTime
) {
  try {
    const contractObj = await contract();
    const data = await contractObj.editDonation(
      donationId,
      name,
      goal,
      pictures,
      category,
      startTime,
      endTime
    );

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function hideDonation(donationId) {
  try {
    const contractObj = await contract();
    const data = await contractObj.hideDonation(donationId);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function addDonation(donationId, amount) {
  try {
    const contractObj = await contract();
    const amountInWei = ethers.utils.parseEther(amount);
    const data = await contractObj.addDonation(donationId, amountInWei);

    const receipt = await data.wait();
    return receipt;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getDonations() {
  try {
    const contractObj = await contract();
    const data = await contractObj.getDonations();

    // Process and format the data as needed
    // Return the formatted donation data
    return data;
  } catch (e) {
    return parseErrorMsg(e);
  }
}

export async function getDonation(donationId) {
  try {
    const contractObj = await contract();
    const data = await contractObj.getDonation(donationId);

    // Process and format the data as needed
    // Return the formatted donation data
    return data;
  } catch (e) {
    return parseErrorMsg(e);
  }
}
