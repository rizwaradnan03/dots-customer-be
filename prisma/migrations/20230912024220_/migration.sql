/*
  Warnings:

  - You are about to drop the column `created_by` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_by` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `customersId` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_customer_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_customersId_fkey";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "created_by",
DROP COLUMN "deleted_by",
DROP COLUMN "updated_by",
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "deletedById" TEXT,
ADD COLUMN     "updatedById" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "customer_id",
DROP COLUMN "customersId",
ADD COLUMN     "customerId" TEXT;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_deletedById_fkey" FOREIGN KEY ("deletedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
