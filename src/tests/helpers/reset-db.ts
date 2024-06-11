import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async () => {
  // $transaction -> either delete all or none
  await prisma.$transaction([prisma.request.deleteMany()]);
};
