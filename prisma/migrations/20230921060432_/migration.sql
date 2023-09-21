/*
  Warnings:

  - Made the column `account_number` on table `loans` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "deposits" ALTER COLUMN "account_number" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "loans" ALTER COLUMN "account_number" SET NOT NULL,
ALTER COLUMN "account_number" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "savings" ALTER COLUMN "account_number" SET DATA TYPE BIGINT;
