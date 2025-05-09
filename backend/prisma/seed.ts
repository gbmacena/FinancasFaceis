import { PrismaClient, CategoryType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando o seeder...");

  const categories = [
    { name: CategoryType.Alimentação },
    { name: CategoryType.Transporte },
    { name: CategoryType.Entretenimento },
    { name: CategoryType.Outros },
    { name: CategoryType.Saúde },
    { name: CategoryType.Educação },
    { name: CategoryType.Compras },
    { name: CategoryType.Viagem },
    { name: CategoryType.Investimentos },
    { name: CategoryType.Dívidas },
  ];

  for (const category of categories) {
    const existingCategory = await prisma.category.findUnique({
      where: { name: category.name },
    });

    if (!existingCategory) {
      await prisma.category.create({ data: category });
      console.log(`Categoria adicionada: ${category.name}`);
    } else {
      console.log(`Categoria já existe: ${category.name}`);
    }
  }

  console.log("Seeder concluído com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro ao executar o seeder:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
