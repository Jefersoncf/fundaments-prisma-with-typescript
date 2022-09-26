import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
// FUNÇÃO QUE ATUALIZA UM CURSO
async function main() {
  const result = await prisma.courses.update({
    where: {
      id: 'c03f60fc-7040-4f21-bd2d-1d38d43b73f4',
    },
    data: {
      duration: 320,
    },
  });
  console.log(result);
}
main();
