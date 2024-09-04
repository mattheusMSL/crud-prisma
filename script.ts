import { prisma } from "./lib/prisma"

async function test(){

   const user = await prisma.user.create({
     data:{
       firstName: "Teste 2",
       lastName: "teste 2",
       validated: false,
     }
   });
   console.log(user)
}

test().then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
});