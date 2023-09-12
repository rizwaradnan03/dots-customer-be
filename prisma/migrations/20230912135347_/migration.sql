/*
  Warnings:

  - You are about to drop the column `deleted_by_id` on the `savings` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "savings" DROP CONSTRAINT "savings_deleted_by_id_fkey";

-- AlterTable
ALTER TABLE "savings" DROP COLUMN "deleted_by_id",
ADD COLUMN     "del_by_id" TEXT,
ALTER COLUMN "currentBalance" SET DEFAULT 0;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_del_by_id_fkey" FOREIGN KEY ("del_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
