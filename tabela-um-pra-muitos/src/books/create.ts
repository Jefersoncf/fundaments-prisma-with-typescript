import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura Clean',
      author_id: '588cefce-9f45-4ac9-9da2-3815e0ff2be1',
    },
  });
  console.log(result);
}
main();
