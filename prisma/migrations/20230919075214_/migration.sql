/*
  Warnings:

  - Added the required column `loan_id` to the `loan_installment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "loan_installment" ADD COLUMN     "loan_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "loan_installment" ADD CONSTRAINT "loan_installment_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
