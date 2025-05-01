/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `Expense` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Expense_uuid_key" ON "Expense"("uuid");
