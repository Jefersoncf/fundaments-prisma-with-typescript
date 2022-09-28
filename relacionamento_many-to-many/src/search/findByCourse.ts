import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findUnique({
    where: {
      id: '1bb45e31-d487-4c07-86d9-2061e71c3a51',
    },
  });
}
main();
