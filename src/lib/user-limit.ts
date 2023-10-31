import { auth } from "@clerk/nextjs";
// import prismadb from "@/lib/prismadb";
import  {db,} from "@/db/index";
import { eq, sql } from 'drizzle-orm'
import { userLimit, UserLimit, NewUserLimit } from '@/db/schema-planet';

export const MAX_FREE_COUNTS = 10;
export const DAY_IN_MS = 86_400_000;

// find all users
// const allUsers = await db.query.users.findMany()

// find a single user
// const user = await db.query.users.findFirst({
//   where: eq(users.id, 1),
// })

export const getUserLimit = async () => {
  const { userId } = auth();

  if (!userId) return null;
  
  const result = await db.select().from(userLimit).
    where(eq(userLimit.userId, userId))
  
    return result[0]

    

}

export const getUserLimitCount = async () => {
  const userLimit = await getUserLimit();

  if (!userLimit) return 0;

  return userLimit.count;
}

export const checkUserLimit = async () => {
  const userLimit = await getUserLimit();

  if (!userLimit || userLimit.count < MAX_FREE_COUNTS) {
    return true;
  }

  return false;
}

export const incrementUserLimit = async () => {
  const { userId } = auth();

  if (!userId) return null;

  const userLimitCurrent = await getUserLimit();

  if (userLimitCurrent) {

    // return await prismadb.userLimit.update({
    //   where: { userId },
    //   data: { count: {increment: 1} }, //count: userLimit.count + 1
    // });
    

    return await db
      .update(userLimit)
      .set({ count: sql`${userLimit.count} + 1` })
      .where(eq(userLimit.userId, userId))
  }

  const insertLimit = async (limit: NewUserLimit) => {
    return db.insert(userLimit).values(limit);
  }

  // type SelectUser2 = InferSelectModel<typeof usersTable>;

  const newLimit: NewUserLimit = { 'userId': userId, count: 1 };
  await insertLimit(newLimit);

  // await db.execute(sql`INSERT INTO ${userLimit} (userId, count) VALUES (${userId}, 1);`)

}

// export const checkSubscription = async () => {
//   const { userId } = auth();

//   if (!userId) {
//     return false;
//   }

//   const userSubscription = await prismadb.userSubscription.findUnique({
//     where: {
//       userId,
//     },
//     select: {
//       stripeCustomerId: true,
//       stripeCurrentPeriodEnd: true,
//       stripePriceId: true,
//       stripeSubscriptionId: true,
//     },
//   });

//   if (!userSubscription) return false;

//   const isValid =
//     userSubscription.stripePriceId &&
//     userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now()

//   return !!isValid;
// };