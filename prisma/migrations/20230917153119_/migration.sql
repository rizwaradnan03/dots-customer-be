/*
  Warnings:

  - You are about to drop the column `file_name` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `attend_at_end` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `branch_id` on the `reservations` table. All the data in the column will be lost.
  - You are about to drop the column `customer_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_customer_id_fkey";

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "user_id" TEXT;

-- AlterTable
ALTER TABLE "images" DROP COLUMN "file_name",
ADD COLUMN     "url_base_64" TEXT;

-- AlterTable
ALTER TABLE "reservations" DROP COLUMN "attend_at_end",
DROP COLUMN "branch_id";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "customer_id";

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_destination_service_fkey" FOREIGN KEY ("destination_service") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
