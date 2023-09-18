/*
  Warnings:

  - You are about to drop the column `transaction_id` on the `deposits` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `loan_opening_application` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `loan_res_application` table. All the data in the column will be lost.
  - Added the required column `loan_id` to the `loan_opening_application` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "loan_opening_application" DROP CONSTRAINT "loan_opening_application_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "loan_res_application" DROP CONSTRAINT "loan_res_application_customerId_fkey";

-- AlterTable
ALTER TABLE "deposits" DROP COLUMN "transaction_id";

-- AlterTable
ALTER TABLE "loan_opening_application" DROP COLUMN "customer_id",
ADD COLUMN     "loan_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "loan_res_application" DROP COLUMN "customerId";

-- AddForeignKey
ALTER TABLE "loan_opening_application" ADD CONSTRAINT "loan_opening_application_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
