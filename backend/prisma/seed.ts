// import { PrismaClient } from "@prisma/client";
// import { faker } from "@faker-js/faker";
// import { CategoryType } from "../src/@types/index";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.installment.deleteMany();
//   await prisma.expense.deleteMany();
//   await prisma.recurringExpense.deleteMany();
//   await prisma.entries.deleteMany();
//   await prisma.category.deleteMany();
//   await prisma.user.deleteMany();

//   const categoryTypes = Object.values(CategoryType);
//   const categories = await Promise.all(
//     categoryTypes.map((type) =>
//       prisma.category.create({
//         data: {
//           name: type,
//         },
//       })
//     )
//   );

//   const users = await Promise.all(
//     Array.from({ length: 5 }).map((_, i) =>
//       prisma.user.create({
//         data: {
//           name: faker.person.fullName(),
//           email: `user${i + 1}@example.com`,
//           passwordHash: "$2a$10$dXJ3SW6G7P50lGmMkkmwe.20cQQubK3.HZWzG3YB1tlRy.fqvM/BG", // "password" hashed
//         },
//       })
//     )
//   );

//   for (const user of users) {
//     for (let i = 0; i < 12; i++) {
//       await prisma.entries.create({
//         data: {
//           value: faker.number.float({ min: 2000, max: 5000, fractionDigits: 2 }),
//           date: new Date(2023, i, 15),
//           userId: user.id,
//         },
//       });
//     }

//     for (let i = 0; i < 20; i++) {
//       const expenseDate = faker.date.between({
//         from: "2023-01-01",
//         to: "2023-12-31",
//       });
//       const category = faker.helpers.arrayElement(categories);

//       if (Math.random() < 0.3) {
//         const totalInstallments = faker.helpers.arrayElement([3, 6, 10, 12]);
//         const expense = await prisma.expense.create({
//           data: {
//             title: `Installment ${faker.commerce.productName()}`,
//             value: faker.number.float({ min: 100, max: 1000, fractionDigits: 2 }),
//             date: expenseDate,
//             userId: user.id,
//             categoryId: category.id,
//           },
//         });

//         for (let j = 0; j < totalInstallments; j++) {
//           await prisma.installment.create({
//             data: {
//               expenseId: expense.id,
//               totalInstallments: totalInstallments,
//               value: expense.value / totalInstallments,
//             },
//           });
//         }
//       } else {
//         await prisma.expense.create({
//           data: {
//             title: faker.commerce.productName(),
//             value: faker.number.float({ min: 5, max: 500, fractionDigits: 2 }),
//             date: expenseDate,
//             userId: user.id,
//             categoryId: category.id,
//           },
//         });
//       }
//     }

//     const frequencies = ["MONTHLY", "WEEKLY", "BIWEEKLY", "QUARTERLY"];
//     for (let i = 0; i < 5; i++) {
//       const category = faker.helpers.arrayElement(categories);
//       const frequency = faker.helpers.arrayElement(frequencies);
//       const nextDueDate = faker.date.between({
//         from: "2023-01-01",
//         to: "2023-12-31",
//       });

//       const recurringExpense = await prisma.recurringExpense.create({
//         data: {
//           title: `Recurring ${faker.commerce.productName()}`,
//           value: faker.number.float({ min: 20, max: 300, fractionDigits: 2 }),
//           userId: user.id,
//           categoryId: category.id,
//           nextDueDate: nextDueDate,
//           frequency: frequency,
//           endDate: Math.random() > 0.7 ? faker.date.future() : null,
//         },
//       });

//       const expenseCount = faker.number.int({ min: 1, max: 6 });
//       for (let j = 0; j < expenseCount; j++) {
//         const expenseDate = new Date(nextDueDate);
//         expenseDate.setMonth(expenseDate.getMonth() + j);

//         await prisma.expense.create({
//           data: {
//             title: recurringExpense.title,
//             value: recurringExpense.value,
//             date: expenseDate,
//             userId: user.id,
//             categoryId: category.id,
//             recurringExpenseId: recurringExpense.id,
//           },
//         });
//       }
//     }
//   }
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
