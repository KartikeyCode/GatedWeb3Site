import { useContract } from "@thirdweb-dev/react";
import abi from "../contract/sneak.js"

export default async function checkBalance(sdk,address){
    const contract = await sdk.getContract("0xEc31b3EdC32469cCAE53334118e43EE8eB2bc749",abi)
    const walletaddress = address;
    const bal = await contract.erc1155.balanceOf(walletaddress);
    return bal.gt(0);
}