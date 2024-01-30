import { createUserData, getAllUser, getUserData, prisma } from "@/prisma/User";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

export async function GET(){
  //try{
    //const usersData = await getAllUser();
    const users = await prisma.User.findMany()

    return NextResponse.json({ message: "Success", user: users });
  //}catch(e){
  //  console.log(e.error);
 // }
}

export async function POST(req){
  try{
    //const { loginName, familyName,firstName, dob, gender, visaType, visaStartDate, firstEntryBefore, passportNationality, passportNumber, clientNumber, visaExpiryDate, numberOfEntries, expirtyDate, pdfLink} = NextRequest.body
    const body = await req.json();
    const userData = await prisma.User.create({
      data : body
      /*{
        loginName: loginName,
        familyName: familyName,
        firstName: firstName,
        dob: dob,
        gender: gender,
        visaType: visaType,
        visaStartDate: visaStartDate,
        firstEntryBefore: firstEntryBefore,
        passportNationality: passportNationality,
        passportNumber: passportNumber,
        clientNumber: clientNumber,
        visaExpiryDate: visaExpiryDate,
        numberOfEntries: numberOfEntries,
        expirtyDate: expirtyDate,
        pdfLink: pdfLink,
      }*/
    })
    let json_response = {
      status: "success",
      data: {
        userData,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }catch(error){
    console.log(error);
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
/*
export default async function handler(req, res){

  try {

    switch(req.method){
      case 'Post': {
        const {loginName, familyName, dob, gender, visaType, visaStartDate, firstEntryBefore, passportNationality, passportNumber, clientNumber, visaExpiryDate, numberOfEntries, expirtyDate, pdfLink} = req.body
        const userData = await createUserData(loginName, familyName, dob, gender, visaType, visaStartDate, firstEntryBefore, passportNationality, passportNumber, clientNumber, visaExpiryDate, numberOfEntries, expirtyDate, pdfLink);
        return res.status(201).json(userData);
      }
      case 'Get': {
        const {id} = req.query
        const userData = await getUserData(id);
        return res.status(200).json(userData);
      }

      case 'Get': {
        //const {id} = req.query
        const usersData = await getAllUser();
        return res.status(200).json(usersData);
      }
    }

  }catch(error) {

  }
}
*/