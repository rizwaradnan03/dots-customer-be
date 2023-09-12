/*
  Warnings:

  - You are about to drop the column `attend_at_end` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `attend_at_start` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `deleted_at` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `destination_service` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `craated_at` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `updated_by` on the `Savings` table. All the data in the column will be lost.
  - Added the required column `createdId` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "attend_at_end",
DROP COLUMN "attend_at_start",
DROP COLUMN "created_at",
DROP COLUMN "created_by",
DROP COLUMN "deleted_at",
DROP COLUMN "destination_service",
DROP COLUMN "is_active",
ADD COLUMN     "attendAtEnd" TIMESTAMP(3),
ADD COLUMN     "attendAtStart" TIMESTAMP(3),
ADD COLUMN     "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdId" TEXT NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP,
ADD COLUMN     "destinationService" INTEGER,
ADD COLUMN     "isActive" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Savings" DROP COLUMN "craated_at",
DROP COLUMN "created_by",
DROP COLUMN "updated_by",
ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedById" TEXT;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_createdId_fkey" FOREIGN KEY ("createdId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
