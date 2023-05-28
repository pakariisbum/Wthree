import { ethers } from "ethers";
import World3 from "./World3.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x9F7559E89455D31875aa9F5E5F6325297B25DA9c",
      World3.abi,
      signer
    );

    return contractReader;
  }
};
