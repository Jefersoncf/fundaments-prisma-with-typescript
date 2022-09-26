import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 3000,
      name: 'Courso de NodeJS',
      description: 'Curso Otimo de NodeJS',
    },
  });
  console.log(result);
}
main();
