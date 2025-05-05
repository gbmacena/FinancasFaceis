/*
  Warnings:

  - You are about to drop the column `totalInstallments` on the `Installment` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `Installment` table. All the data in the column will be lost.
  - Added the required column `date` to the `Installment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "installmentsCount" INTEGER;

-- AlterTable
ALTER TABLE "Installment" DROP COLUMN "totalInstallments",
DROP COLUMN "uuid",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
