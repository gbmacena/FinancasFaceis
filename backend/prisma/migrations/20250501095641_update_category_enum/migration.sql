/*
  Warnings:

  - The values [ALIMENTACAO,TRANSPORTE,ENTRETENIMENTO,OUTROS,SAUDE,EDUCACAO,COMPRAS,VIAGEM,INVESTIMENTOS,DIVIDAS] on the enum `CategoryType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CategoryType_new" AS ENUM ('Alimentação', 'Transporte', 'Entretenimento', 'Outros', 'Saúde', 'Educação', 'Compras', 'Viagem', 'Investimentos', 'Dívidas');
ALTER TABLE "Category" ALTER COLUMN "name" TYPE "CategoryType_new" USING ("name"::text::"CategoryType_new");
ALTER TYPE "CategoryType" RENAME TO "CategoryType_old";
ALTER TYPE "CategoryType_new" RENAME TO "CategoryType";
DROP TYPE "CategoryType_old";
COMMIT;
