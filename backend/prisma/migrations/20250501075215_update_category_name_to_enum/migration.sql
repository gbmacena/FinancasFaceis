/*
  Warnings:

  - The values [FOOD,TRANSPORT,ENTERTAINMENT,OTHER,HEALTH,EDUCATION,UTILITIES,SHOPPING,TRAVEL,SAVINGS,INVESTMENTS,DEBTS,INCOME,GIFTS,SUBSCRIPTIONS] on the enum `CategoryType` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `name` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryType_new" AS ENUM ('ALIMENTACAO', 'TRANSPORTE', 'ENTRETENIMENTO', 'OUTROS', 'SAUDE', 'EDUCACAO', 'COMPRAS', 'VIAGEM', 'INVESTIMENTOS', 'DIVIDAS');
ALTER TABLE "Category" ALTER COLUMN "name" TYPE "CategoryType_new" USING ("name"::text::"CategoryType_new");
ALTER TYPE "CategoryType" RENAME TO "CategoryType_old";
ALTER TYPE "CategoryType_new" RENAME TO "CategoryType";
DROP TYPE "CategoryType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "name",
ADD COLUMN     "name" "CategoryType" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
