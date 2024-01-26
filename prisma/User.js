const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

export const getUserData = async () => {
    const users = await prisma.user.findUnique({
        where: {

        }
    })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })