/*
  Warnings:

  - The primary key for the `Image` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Image` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `isOnCarousel` column on the `Image` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `createdAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `isactive` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `officeDestinationId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `purpose` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `qrcodedata` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Reservation` table. All the data in the column will be lost.
  - The primary key for the `Savings` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `account` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `officeId` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Savings` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Savings` table. All the data in the column will be lost.
  - The `id` column on the `Savings` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Credit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Deposit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `History` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Office` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Province` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Subdistrict` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ward` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `last_synced_at` to the `Savings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "City" DROP CONSTRAINT "City_provinceId_fkey";

-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_officeId_fkey";

-- DropForeignKey
ALTER TABLE "Credit" DROP CONSTRAINT "Credit_userId_fkey";

-- DropForeignKey
ALTER TABLE "Deposit" DROP CONSTRAINT "Deposit_officeId_fkey";

-- DropForeignKey
ALTER TABLE "Deposit" DROP CONSTRAINT "Deposit_userId_fkey";

-- DropForeignKey
ALTER TABLE "History" DROP CONSTRAINT "History_userId_fkey";

-- DropForeignKey
ALTER TABLE "Office" DROP CONSTRAINT "Office_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Office" DROP CONSTRAINT "Office_provinceId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_officeDestinationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_serviceId_fkey";

-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_officeId_fkey";

-- DropForeignKey
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_userId_fkey";

-- DropForeignKey
ALTER TABLE "Subdistrict" DROP CONSTRAINT "Subdistrict_cityId_fkey";

-- DropForeignKey
ALTER TABLE "Ward" DROP CONSTRAINT "Ward_subdistrictId_fkey";

-- AlterTable
ALTER TABLE "Image" DROP CONSTRAINT "Image_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "filename" DROP NOT NULL,
DROP COLUMN "isOnCarousel",
ADD COLUMN     "isOnCarousel" BOOLEAN,
ADD CONSTRAINT "Image_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "createdAt",
DROP COLUMN "date",
DROP COLUMN "isactive",
DROP COLUMN "officeDestinationId",
DROP COLUMN "purpose",
DROP COLUMN "qrcodedata",
DROP COLUMN "serviceId",
DROP COLUMN "time",
DROP COLUMN "updatedAt",
ADD COLUMN     "attend_at_end" TIMESTAMP(3),
ADD COLUMN     "attend_at_start" TIMESTAMP(3),
ADD COLUMN     "branch_id" TEXT,
ADD COLUMN     "created_at" TIMESTAMP,
ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "deleted_at" TIMESTAMP,
ADD COLUMN     "destination_service" INTEGER,
ADD COLUMN     "reason" TEXT,
ADD COLUMN     "tenant_id" INTEGER;

-- AlterTable
ALTER TABLE "Savings" DROP CONSTRAINT "Savings_pkey",
DROP COLUMN "account",
DROP COLUMN "createdAt",
DROP COLUMN "officeId",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "available_balance" INTEGER,
ADD COLUMN     "craated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" INTEGER,
ADD COLUMN     "current_balance" INTEGER,
ADD COLUMN     "customer_id" INTEGER,
ADD COLUMN     "deleted_at" TIMESTAMP,
ADD COLUMN     "external_id" TEXT,
ADD COLUMN     "last_synced_at" TIMESTAMP NOT NULL,
ADD COLUMN     "product_type" TEXT,
ADD COLUMN     "status" INTEGER,
ADD COLUMN     "updated_at" TIMESTAMP(3),
ADD COLUMN     "updated_by" INTEGER,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Savings_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "City";

-- DropTable
DROP TABLE "Credit";

-- DropTable
DROP TABLE "Deposit";

-- DropTable
DROP TABLE "History";

-- DropTable
DROP TABLE "Office";

-- DropTable
DROP TABLE "Province";

-- DropTable
DROP TABLE "Service";

-- DropTable
DROP TABLE "Subdistrict";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Ward";

-- CreateTable
CREATE TABLE "tenants" (
    "id" SERIAL NOT NULL,
    "public_id" TEXT,
    "name" TEXT,
    "database_schema_name" TEXT,
    "core_type" TEXT,
    "core_database_type" TEXT,
    "core_database_dsn" TEXT,
    "logo_url_base64" TEXT,

    CONSTRAINT "tenants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "is_active" BOOLEAN,
    "email" TEXT,
    "email_confirmed_at" TIMESTAMP,
    "username" TEXT,
    "password" TEXT,
    "last_name" TEXT,
    "first_name" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP(3),
    "account_officer_id" TEXT DEFAULT 'CORPORATE',
    "client_type" TEXT,
    "customer_id" INTEGER,
    "tenant_id" INTEGER,
    "branch_id" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customers" (
    "id" SERIAL NOT NULL,
    "external_id" TEXT,
    "full_name" TEXT,
    "identity_number" TEXT,
    "identity_type" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "mobile_number" TEXT,
    "gender" TEXT,
    "address" TEXT,
    "subdistrict" TEXT,
    "district" TEXT,
    "mother_maiden_name" TEXT,
    "dati2_code" TEXT,
    "identity_photo_url" TEXT,
    "selfie_photo_url" TEXT,
    "birth_place" TEXT,
    "birth_date" DATE,
    "status" INTEGER,
    "last_synced_at" TIMESTAMP,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "deleted_by" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "delete_at" TIMESTAMP,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
