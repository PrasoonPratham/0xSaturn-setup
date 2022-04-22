import dotenv from 'dotenv';
import { Wallet, getDefaultProvider } from 'ethers';
import { SaturnClient } from '@0xsaturn/sdk';

dotenv.config();

// Initialize client
const client = new SaturnClient(
    new Wallet(
        process.env.PRIVATE_KEY!,
        getDefaultProvider(
            'https://rpc-mumbai.maticvigil.com'
        )
    )
);

// Deploy the contract -- Contract registry.
const deploy = async () => {
    const address = await client.deployContractRegistryModule({
        name: "My contract registry",
    });

    console.log(`🌊 Contract registry deployed at ${address}`);
};

deploy();
