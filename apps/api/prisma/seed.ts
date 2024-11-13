import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'nacho@dev.com' },
    update: {},
    create: {
      email: 'nacho@dev.com',
      name: 'Ignacio Figueroa',
      password: 'password-nacho',
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'miguel@masedo.com' },
    update: {},
    create: {
      email: 'miguel@masedo.com',
      name: 'Miguel Masedo',
      password: 'password-miguel',
    },
  });

  const post1 = await prisma.post.upsert({
    where: { id: 1 },
    update: {
      authorId: user1.id,
    },
    create: {
      title: 'La receta secreta de la abuela',
      body: 'Una receta que ha pasado de generación en generación, con ingredientes únicos...',
      description:
        'Descubre la receta secreta que transforma cualquier comida en una experiencia memorable.',
      published: false,
      authorId: user1.id,
    },
  });

  const post2 = await prisma.post.upsert({
    where: { id: 2 },
    update: {
      authorId: user2.id,
    },
    create: {
      title: 'Cómo cuidar tus plantas de interior',
      body: 'Las plantas de interior requieren cuidados específicos para prosperar y llenar tu hogar de vida...',
      description:
        'Consejos y trucos para mantener tus plantas de interior sanas y hermosas todo el año.',
      published: true,
      authorId: user2.id,
    },
  });

  console.log({ post1, post2, user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
