/*
  Warnings:

  - You are about to drop the column `reason` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `biologicalMotherName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `purpose` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `motherMaiden` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_serviceId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "reason",
DROP COLUMN "serviceId",
ADD COLUMN     "purpose" TEXT NOT NULL,
ADD COLUMN     "service" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "biologicalMotherName",
ADD COLUMN     "motherMaiden" TEXT NOT NULL;

-- DropTable
DROP TABLE "Service";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "filename" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "isOnCarousel" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
