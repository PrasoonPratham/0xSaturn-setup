import dotenv from 'dotenv';
import { Wallet, getDefaultProvider } from 'ethers';
import { SaturnClient } from '@0xsaturn/sdk';

dotenv.config();

// Initialize client
const client = new SaturnClient(
    new Wallet(
        process.env.PRIVATE_KEY!,
        getDefaultProvider(
            'https://matic-mumbai.chainstacklabs.com'
        )
    )
);

// Deploy the contract.
const deploy = async () => {
    const address = await client.deployTokenModule({
        name: "My Token",
        symbol: "MTKN",
    });

    console.log(`🌊 ERC20 contract deployed at ${address}`);
};

deploy();

const mintTokens = async (address: string) => {
    const erc20 = client.getTokenModule(address);

    const { transactionHash } = await erc20.mint(5000);

    console.log('✨ Minted 5000 of tokens. Tx hash:', transactionHash);
}
