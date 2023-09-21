-- AlterTable
ALTER TABLE "notifications" ADD COLUMN     "saving_id" TEXT;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_saving_id_fkey" FOREIGN KEY ("saving_id") REFERENCES "savings"("id") ON DELETE SET NULL ON UPDATE CASCADE;
