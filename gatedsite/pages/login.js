import {
  useContract,
  useAddress,
  useMetamask,
  useClaimNFT,
  useNetworkMismatch,
  useUser,
  useLogin,
} from "@thirdweb-dev/react";
import Navbar from "../components/navbar";
import { ChainId } from "@thirdweb-dev/react";
import { ThirdwebAuthHandler } from "../auth.config";
import abi from "../contract/sneak";

export default function Login() {
  const address = useAddress();
  const metamask = useMetamask();
  const contract = useContract("0xEc31b3EdC32469cCAE53334118e43EE8eB2bc749",abi);
  const {login} = useLogin();
  const { user } = useUser();

  return <div>
    <Navbar/>
    {address ? <>
  <h1> Welcome </h1>
  <button onClick={login}> Log In </button>
  </> 
  : <>
  <h1> Please Connect your Wallet </h1>
  </>}</div>;
}
