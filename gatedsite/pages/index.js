import Image from "next/image";
import Navbar from "../components/navbar";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { getUser } from "../auth.config";
import checkBalance from "../util/checkbalance";

export default function Home() {
  console.log(process.env.PRIVATE_KEY)
  return (
    <div className="min-h-screen ">
      <Navbar />
      <div className="mt-14 p-4 landing flex items-center justify-center">
        <h1 className="text-3xl text-center xl:text-9xl">
          Welcome to Sneak 
          Thank you for becoming a member!
        </h1>
      </div>
    </div>
  );
}
export async function getServerSideProps(req,res){
  const user = await getUser(req);

  if(!user){
    return{
      redirect:{
        destination:"/login",
        permanent:false,
      },
    }
  }

  const sdk = ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY,"mumbai")

  const hasToken = await checkBalance(sdk,user.address);

  if(!hasToken){
    console.log("User ",user.address,"does not have the token!")
      return{
        redirect:{
          destination: "/login",
          permanent: false
        },
      }
  }

  return{
    props:{

    },
  }

}