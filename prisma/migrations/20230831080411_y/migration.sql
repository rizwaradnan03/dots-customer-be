/*
  Warnings:

  - Made the column `date` on table `Reservation` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateOfBirth` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Reservation" ALTER COLUMN "date" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "dateOfBirth" SET NOT NULL;
