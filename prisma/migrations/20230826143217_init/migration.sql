/*
  Warnings:

  - You are about to drop the column `biologicalMotherName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `dateOfBirth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nik` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `placeOfBirth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `referralCode` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_username_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "biologicalMotherName",
DROP COLUMN "dateOfBirth",
DROP COLUMN "email",
DROP COLUMN "nik",
DROP COLUMN "password",
DROP COLUMN "placeOfBirth",
DROP COLUMN "referralCode",
DROP COLUMN "username";
