-- AlterTable
ALTER TABLE "savings" ADD COLUMN     "is_active" INTEGER DEFAULT 1;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "is_active" SET DEFAULT 1;
