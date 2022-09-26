import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 250,
      name: 'Curso de Angular',
      description: 'Curso exelente curso de Angular',
    },
  });

  console.log(result);
}

main();
