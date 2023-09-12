/*
  Warnings:

  - You are about to drop the column `createdId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `tenantsId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Savings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_createdId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_tenant_id_fkey";

-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_tenantsId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "createdId",
DROP COLUMN "tenant_id";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "tenantsId";

-- DropTable
DROP TABLE "Savings";

-- CreateTable
CREATE TABLE "savings" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "currentBalance" INTEGER,
    "availableBalance" INTEGER,
    "status" INTEGER,
    "productType" TEXT,
    "last_synced_at" TIMESTAMP NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP,
    "updatedById" TEXT,
    "createdById" TEXT,
    "customerId" TEXT,

    CONSTRAINT "savings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
