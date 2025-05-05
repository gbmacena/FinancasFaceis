-- DropForeignKey
ALTER TABLE "Installment" DROP CONSTRAINT "Installment_expenseId_fkey";

-- AddForeignKey
ALTER TABLE "Installment" ADD CONSTRAINT "Installment_expenseId_fkey" FOREIGN KEY ("expenseId") REFERENCES "Expense"("id") ON DELETE CASCADE ON UPDATE CASCADE;
