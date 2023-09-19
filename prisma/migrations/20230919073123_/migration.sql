/*
  Warnings:

  - The primary key for the `loan_installment` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "loan_installment" DROP CONSTRAINT "loan_installment_loan_opening_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_loan_id_fkey";

-- DropForeignKey
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_reservation_id_fkey";

-- AlterTable
ALTER TABLE "loan_installment" DROP CONSTRAINT "loan_installment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "amount" DROP NOT NULL,
ALTER COLUMN "payment_date" DROP NOT NULL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "loan_opening_id" DROP NOT NULL,
ADD CONSTRAINT "loan_installment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "loan_installment_id_seq";

-- AlterTable
ALTER TABLE "notifications" ALTER COLUMN "loan_id" DROP NOT NULL,
ALTER COLUMN "reservation_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "loan_installment" ADD CONSTRAINT "loan_installment_loan_opening_id_fkey" FOREIGN KEY ("loan_opening_id") REFERENCES "loan_opening_application"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "reservations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_loan_id_fkey" FOREIGN KEY ("loan_id") REFERENCES "loans"("id") ON DELETE SET NULL ON UPDATE CASCADE;
