import { ethers } from "ethers";
import World3 from "./World3.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x74eFE023840C8F69D5d8714d838B8464D0e29d30",
      World3.abi,
      signer
    );

    return contractReader;
  }
};
