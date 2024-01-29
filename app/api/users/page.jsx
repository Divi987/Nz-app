import { createUserData, getAllUser, getUserData } from "@/prisma/User";

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