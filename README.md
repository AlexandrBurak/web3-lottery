# Welcome to Web3 Lottery: A Decentralized Lottery App

Web3 Lottery is a state-of-the-art decentralized lottery application built on the Ethereum blockchain using web3 technology. This app utilizes smart contracts written in Solidity and sealed on ThirdWeb for transparency, security, and trust in the lottery process. The frontend is developed with Next.js and styled using Tailwind CSS to provide a seamless and user-friendly experience.

With Web3 Lottery, participants can partake in a fair and transparent lottery where the results are determined by the smart contract's predefined rules. Whether you're a player or an enthusiast, this app showcases the potential of blockchain technology in creating provably fair games of chance.

## Features

- **Decentralized Lottery:** Experience the fairness and transparency of blockchain technology by participating in a decentralized lottery.

- **Smart Contract Security:** The underlying smart contract, written in Solidity, ensures that the lottery process is tamper-proof and the outcomes are provably fair.

- **User-Friendly Interface:** The frontend is built using Next.js and styled with Tailwind CSS, delivering a seamless and intuitive user experience.

- **ThirdWeb Integration:** Web3 Lottery leverages ThirdWeb to seal the smart contract, enhancing security and ensuring trust in the integrity of the lottery.

- **Ethereum and Web3:** The application uses Ethereum's blockchain and Web3.js to interact with the smart contract and provide real-time updates.

## Getting Started

Follow these steps to set up Web3 Lottery locally for development and testing purposes.

### Prerequisites

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/VladFedoseev7/Web3_Lottery.git
   cd Web3_Lottery
   ```

2. Install the dependencies in lottery and lottery-smart-contract:

   ```bash
   npm install
   #or
   yarn
   ```

### Deploy

To publish and then deploy a contract on Thirdweb, you will need a Metamask wallet. Go to lottery-smart-contract and enter the command:

```bash
npx thirdweb@latest publish
```

### Configuration

Rename .env.example to .env.local and replace the values with your own Ethereum provider URL(CLIENT ID from API Keys on deployed contract from Thirdweb) and contract address (latest deployed contract address):

```bash
CLIENT_ID=your_client_id
NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS=your_contract_address
```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   #or
   yarn run dev
   ```

2. Access Web3 Lottery in your browser at http://localhost:3000.

## Contributing

Contributions to Web3 Lottery are highly appreciated! Feel free to open issues and submit pull requests for any improvements or bug fixes.
