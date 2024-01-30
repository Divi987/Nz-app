'use client'

import { userState, userStateSelector } from "@/components/Form"
import { useRecoilValue } from "recoil"

export default function Page() {
    //const id = user.id;
    const value = useRecoilValue(userState)
    console.log(value);
    return(
        <>
            <h1>Hello</h1>
            <p>{value.length}</p>
        </>
    )
}