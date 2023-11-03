require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
const ALCHEMY_SEPOLIA_URL = process.env.ALCHEMY_SEPOLIA_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.20",
  networks: { 
    hardhat : {},
    sepolia : {
      url : ALCHEMY_SEPOLIA_URL,
      accounts : [`0x${PRIVATE_KEY}`],

    }
  },
};
