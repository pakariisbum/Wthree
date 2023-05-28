import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";



const xdcApothem = {
  id: 80001,
  name: "Mumbai",
  network: "Mumbai",
  nativeCurrency: {
    decimals: 18,
    name: "mumbai",
    symbol: "MATIC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-mumbai.maticvigil.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Mumbai Explorer",
      url: "https://mumbai.polygonscan.com",
    },
  },
  testnet: true,
};

const networks = {
  theta: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "mumbai Testnet",
    nativeCurrency: {
      name: "mumbai Testnet",
      symbol: "MATIC",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com"],
  },
};

const changeNetwork = async () => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks["theta"],
        },
      ],
    });
  } catch (err) {
    alert(err.message);
  }
};

const { provider, chains } = configureChains(
  [xdcApothem],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Sustain",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    changeNetwork
  }, [])
  
  return (
    <Fragment>
         <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={myTheme}><
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
        <link
          rel="shortcut icon"
          href="assets/images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
        <title>
          Masden || charity & fundrising Responsive React NextJS Template
        </title>
      </Head>
      <Component {...pageProps} />
      </RainbowKitProvider>
      </WagmiConfig>

    </Fragment>
  );
}

export default MyApp;
