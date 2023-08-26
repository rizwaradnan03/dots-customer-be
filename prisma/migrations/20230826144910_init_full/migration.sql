/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `biologicalMotherName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nik` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referralCode` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "biologicalMotherName" TEXT NOT NULL,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "nik" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "placeOfBirth" TEXT NOT NULL,
ADD COLUMN     "referralCode" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
