import { ThirdwebAuth } from "@thirdweb-dev/auth";

export const {ThirdwebAuthHandler, getUser} = ThirdwebAuth({
    privateKey : process.env.PRIVATE_KEY || "",
    domain:"Sneak"
})