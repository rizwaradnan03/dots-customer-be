/*
  Warnings:

  - You are about to drop the column `reservation_id` on the `customers` table. All the data in the column will be lost.
  - You are about to drop the column `reservationsId` on the `customers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_reservation_id_fkey";

-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_reservationsId_fkey";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "reservation_id",
DROP COLUMN "reservationsId";
