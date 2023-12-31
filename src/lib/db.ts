import { PrismaClient } from "@prisma/client"
// import { PrismaClient } from '@prisma/client/edge'

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient(
      {
        datasources: { db: { url: process.env.DATABASE_URL } }
      }
    )
  }
  prisma = global.cachedPrisma
}

export const db = prisma
// export default prisma;