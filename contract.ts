import dotenv from 'dotenv';
import { Wallet, getDefaultProvider } from 'ethers';
import { SaturnClient } from '@0xsaturn/sdk';

dotenv.config();

// Initialize client
const client = new SaturnClient(
  new Wallet(
    process.env.PRIVATE_KEY!,
    getDefaultProvider("https://matic-mumbai.chainstacklabs.com")
  )
);

// Add contract to the registry
const addContract = async (address: string) => {
    const holder = client.getContractRegistryModule('0xD3F0eB70428f18Ef60013D6c4a602C2f55a5a057');

    const { transactionHash } = await holder.add('This contract', address);

    console.log('✨ Tx hash:', transactionHash);
}

addContract('0xD3F0eB70428f18Ef60013D6c4a602C2f55a5a057');
