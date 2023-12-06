import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    xdai: {
      url: "https://rpc.gnosischain.com/",
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 5,
    },
    local: {
      url: "http://localhost:8545",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
    },
    goerli: {
      url: "https://goerli.infura.io/v3/e8add60e5d41488fa4c2bd06125d9faa",
      accounts: ["0x9ea3377f71aafac1cefddb2d057df23dfa5315830acee5ccf57ebeaf11382563"],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
