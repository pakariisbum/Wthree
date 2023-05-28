import { ethers } from "ethers";
import World3 from "./World3.json";

export const contract = async () => {
  const provider = new ethers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractReader = new ethers.Contract(
      "0x931880fA76409beb5e0AF818DD39eEd7C8004F11",
      World3.abi,
      signer
    );

    return contractReader;
  }
};
