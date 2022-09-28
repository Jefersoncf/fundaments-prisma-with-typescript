import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const result = await prisma.authors.create({
    data: {
      name: 'Mayk Brito',
      books: {
        createMany: {
          data: [
            { name: 'Iniciando na programação' },
            { name: 'Produtividade Full' },
            { name: 'CSS de Milhões' },
          ],
        },
      },
    },
  });
  console.log(result);
}
main();
