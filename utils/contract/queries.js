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
  country,
  endTime
) {
  try {
    const contractObj = await contract();
    // Assuming you have a contract function to get the contract instance
    // const amountInWei = ethers.utils.parseEther(goal);
    // const startTime_ = Math.floor(startTime.getTime() / 1000); // Convert to Unix timestamp
    // const endTime_ = Math.floor(endTime.getTime() / 1000); // Convert to Unix timestamp
    // const data = await contractObj.createDonation(
    //   name,
    //   description,
    //   amountInWei,
    //   pictures,
    //   category,
    //   startTime_,
    //   country,
    //   endTime_
    // );

    // const receipt = await data.wait();
    // console.log(receipt);
    // return receipt;

    console.log(res);
    console.log("name", name);
    console.log("description", description);
    console.log("goal", goal);
    console.log("pictures", pictures);
    console.log("category", category);
    console.log("starttime", startTime);
    console.log("endtime", endTime);
    console.log("country", country);
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

    console.log(data);
    // Process and format the data as needed
    // Return the formatted donation data
    return data;
  } catch (e) {
    console.log(e);
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
    // console.log(e);
    return parseErrorMsg(e);
  }
}

function toWei(amount) {
  const toWei = ethers.utils.parseUnits(amount.toString());
  return toWei;
}

function parseErrorMsg(e) {
  const json = JSON.parse(JSON.stringify(e));
  return json?.reason || json?.error?.message;
}
