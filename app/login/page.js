import { Inter } from "next/font/google";
import LoginFooter from "@/components/LoginFooter"
import LoginHeader from "@/components/LoginHeader"

export default function Login() {
    return(
        <>
        <LoginHeader />
        <div className="bg-[#d64309] min-h-12">
            <LoginFooter />
        </div>
        </>
    )
}