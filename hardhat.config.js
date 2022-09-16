// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
   solidity: "0.8.7",
   defaultNetwork: "goerli",
   networks: {
     hardhat: {},
     goerli: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
 };
 



// module.exports = {
//   defaultNetwork: "goerli",
//   networks: {
//     hardhat: {
//     },
//     goerli: {
//       url: "https://eth-goerli.g.alchemy.com/v2/-NNAty0yMkF0I4hAEcLxhUquGTJ_ri4x",
//       accounts: ["860970b824f70446a25503fe055e584d58d62da9b3604d1a6007c823baf2da7a"]
//     }
//   },
//   solidity: {
//     version: "0.8.7",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts/MyNFT.sol",
//     // tests: "./test",
//     // cache: "./cache",
//     // artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 20000
//   }
// }