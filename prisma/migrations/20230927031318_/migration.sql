/*
  Warnings:

  - The `identity_number` column on the `customers` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "identity_number",
ADD COLUMN     "identity_number" INTEGER;
