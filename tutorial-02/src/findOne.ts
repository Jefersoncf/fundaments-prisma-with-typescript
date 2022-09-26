import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // SELECT * FROM COUSERS LIMIT 1
  // SELECT * FROM COUSERS ORDER BY ID DESC LIMIT 1
  const course = await prisma.courses.findFirst({
    take: -1,
  });
  console.log(course);
}
main();
