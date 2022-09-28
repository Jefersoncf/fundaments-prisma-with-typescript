import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 300,
          name: 'Course the NodeJS',
          description: 'Course the NodeJS complete',
        },
      },
      module: {
        create: {
          name: 'Course the Prisma',
          description: 'Course the Prisma complete',
        },
      },
    },
  });
  console.log(result);
}
main();
