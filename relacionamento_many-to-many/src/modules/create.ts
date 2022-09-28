import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const module = await prisma.modules.create({
    data: {
      description: 'Aprendendo Firebase do Zero',
      name: 'Aprendendo Firebase',
    },
  });
}
main();
