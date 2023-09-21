/*
  Warnings:

  - The `account_number` column on the `deposits` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `account_number` column on the `loans` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `account_number` column on the `savings` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "deposits" DROP COLUMN "account_number",
ADD COLUMN     "account_number" INTEGER;

-- AlterTable
ALTER TABLE "loans" DROP COLUMN "account_number",
ADD COLUMN     "account_number" INTEGER;

-- AlterTable
ALTER TABLE "savings" DROP COLUMN "account_number",
ADD COLUMN     "account_number" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "deposits_account_number_key" ON "deposits"("account_number");

-- CreateIndex
CREATE UNIQUE INDEX "loans_account_number_key" ON "loans"("account_number");

-- CreateIndex
CREATE UNIQUE INDEX "savings_account_number_key" ON "savings"("account_number");
