/*
  Warnings:

  - You are about to drop the column `installmentsCount` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `recurringExpenseId` on the `Expense` table. All the data in the column will be lost.
  - Added the required column `title` to the `Installment` table without a default value. This is not possible if the table is not empty.
  - The required column `uuid` was added to the `Installment` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_recurringExpenseId_fkey";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "installmentsCount",
DROP COLUMN "recurringExpenseId";

-- AlterTable
ALTER TABLE "Installment" ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "uuid" TEXT NOT NULL;
