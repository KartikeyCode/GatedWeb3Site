import { ConnectWallet,useAddress } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
       <div className="h-20 flex justify-between px-4 items-center bg-black w-full ">

            <h1 className="font-sans font-bold xl:text-4xl text-white">
               xXSNEAKXx
            </h1>
            <div className="wallet">
              <ConnectWallet
                dropdownPosition={{
                  side: "bottom",
                  align: "center",
                }}
                />
            </div>
                </div>
         
    );
  }
  