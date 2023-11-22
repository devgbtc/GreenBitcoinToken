const hre = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log('Deploying contracts with the account:', deployer.address);
  console.log('Account balance:', ethers.utils.formatEther(await deployer.getBalance()));

  const Token = await hre.ethers.getContractFactory('GreenBitcoinToken');
  const token = await Token.deploy('Green Bitcoin', 'GBTC');

  await token.deployed();

  console.log(`Token deployed at : ${token.address}`);
  console.log(`Token name : ${await token.name()}`);
  console.log(`Token symbol : ${await token.symbol()}`);
  console.log(`Total Supply : ${await token.totalSupply()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
