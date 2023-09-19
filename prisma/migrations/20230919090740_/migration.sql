-- AlterTable
ALTER TABLE "loan_installment" ADD COLUMN     "interest" INTEGER DEFAULT 0,
ADD COLUMN     "penalty" INTEGER DEFAULT 0,
ADD COLUMN     "total_amount" INTEGER DEFAULT 0;
