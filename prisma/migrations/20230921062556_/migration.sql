-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "reservation_id" TEXT,
ADD COLUMN     "reservationsId" TEXT;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_reservation_id_fkey" FOREIGN KEY ("reservation_id") REFERENCES "reservations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_reservationsId_fkey" FOREIGN KEY ("reservationsId") REFERENCES "reservations"("id") ON DELETE SET NULL ON UPDATE CASCADE;
