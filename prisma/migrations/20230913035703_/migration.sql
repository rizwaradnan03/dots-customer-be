/*
  Warnings:

  - You are about to drop the column `external_id` on the `customers` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customers" DROP COLUMN "external_id",
ADD COLUMN     "identity_number" TEXT;
