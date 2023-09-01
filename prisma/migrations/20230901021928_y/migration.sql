/*
  Warnings:

  - Added the required column `service` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "service" TEXT NOT NULL;
