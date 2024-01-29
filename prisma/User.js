const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export const createUserData = async (loginName, familyName, dob, gender, visaType, visaStartDate, firstEntryBefore, passportNationality, passportNumber, clientNumber, visaExpiryDate, numberOfEntries, expirtyDate, pdfLink) => {
  const user = await prisma.user.create({
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
  })

  return user;
}

export const getUserData = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id: id
    }
  })
  return user;
}

export const getAllUser = async () => {
  const users = await prisma.user.findMany()
  return users;
}

/*main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })*/