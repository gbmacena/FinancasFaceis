-- AlterTable
ALTER TABLE "Entries" ADD COLUMN     "recurringExpenseId" INTEGER;

-- AddForeignKey
ALTER TABLE "Entries" ADD CONSTRAINT "Entries_recurringExpenseId_fkey" FOREIGN KEY ("recurringExpenseId") REFERENCES "RecurringExpense"("id") ON DELETE SET NULL ON UPDATE CASCADE;
