import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUsers(){
  const user = await prisma.user.findMany();

  console.log(user);
}

getUsers();