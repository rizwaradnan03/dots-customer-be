/*
  Warnings:

  - You are about to drop the column `createdById` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `deletedById` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `filename` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `isOnCarousel` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `savings` table. All the data in the column will be lost.
  - You are about to drop the column `customerId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `Reservation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_createdById_fkey";

-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_deletedById_fkey";

-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "savings" DROP CONSTRAINT "savings_createdById_fkey";

-- DropForeignKey
ALTER TABLE "savings" DROP CONSTRAINT "savings_customerId_fkey";

-- DropForeignKey
ALTER TABLE "savings" DROP CONSTRAINT "savings_updatedById_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_customerId_fkey";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "createdById",
DROP COLUMN "deletedById",
DROP COLUMN "updatedById",
ADD COLUMN     "created_by_id" TEXT,
ADD COLUMN     "deleted_by_id" TEXT,
ADD COLUMN     "updated_by_id" TEXT;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "filename",
DROP COLUMN "isOnCarousel",
ADD COLUMN     "file_name" TEXT,
ADD COLUMN     "is_on_carousel" BOOLEAN;

-- AlterTable
ALTER TABLE "savings" DROP COLUMN "createdById",
DROP COLUMN "customerId",
DROP COLUMN "updatedById",
ADD COLUMN     "created_by_id" TEXT,
ADD COLUMN     "customer_id" TEXT,
ADD COLUMN     "updated_by_id" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "customerId",
ADD COLUMN     "customer_id" TEXT;

-- DropTable
DROP TABLE "Reservation";

-- CreateTable
CREATE TABLE "reservations" (
    "id" TEXT NOT NULL,
    "branch_id" TEXT,
    "destination_service" INTEGER,
    "reason" TEXT,
    "attend_at_start" TIMESTAMP(3),
    "attend_at_end" TIMESTAMP(3),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP,
    "is_active" BOOLEAN DEFAULT false,
    "created_by_id" TEXT,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_updated_by_id_fkey" FOREIGN KEY ("updated_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_updated_by_id_fkey" FOREIGN KEY ("updated_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_deleted_by_id_fkey" FOREIGN KEY ("deleted_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
