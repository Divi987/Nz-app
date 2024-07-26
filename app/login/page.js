import { Inter } from "next/font/google";
import LoginFooter from "@/components/LoginFooter"
import LoginHeader from "@/components/LoginHeader"
import LoginContainer from "@/components/LoginContainer";

export default function Login() {
    return(
        <>
        <LoginHeader />
        <LoginContainer />
        <div className="bg-[#d64309] min-h-12">
            <LoginFooter />
        </div>
        </>
    )
}