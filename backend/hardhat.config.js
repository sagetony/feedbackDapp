require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    Goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/jFt5UlUXHbrbOtldpgZ2-w36Hy-1BwmK",
      accounts: [
        "cc211ebf9ea736e36e587e4cc14f1c4ac1724ef29a03d7f0063074e8ea243f8e",
      ],
      chainId: 5,
      // blockConfirmation: 1,
    },
  },
};
