import { ethers } from "ethers";
import World3 from "./World3.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x7E2e3f0c33ebaC151C946395c6f888b014319d42",
      World3.abi,
      signer
    );

    return contractReader;
  }
};
