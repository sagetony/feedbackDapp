require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    Goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/jFt5UlUXHbrbOtldpgZ2-w36Hy-1BwmK",
      accounts:
        "33c9cf548aaca92d321d74483de6575452f7bc99574c6586f39fffa0276f0dfa",
      chainId: 5,
      // blockConfirmation: 1,
    },
  },
};
