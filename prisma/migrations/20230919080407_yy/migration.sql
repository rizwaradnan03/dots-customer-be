/*
  Warnings:

  - You are about to drop the column `customersId` on the `notifications` table. All the data in the column will be lost.
  - You are about to drop the column `isOpened` on the `notifications` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_customersId_fkey";

-- AlterTable
ALTER TABLE "loan_opening_application" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "notifications" DROP COLUMN "customersId",
DROP COLUMN "isOpened",
ADD COLUMN     "customer_id" TEXT,
ADD COLUMN     "is_opened" INTEGER DEFAULT 0,
ADD COLUMN     "loan_id" TEXT,
ADD COLUMN     "reservation_id" TEXT;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "reservations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
