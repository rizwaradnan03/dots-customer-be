-- AlterTable
ALTER TABLE "deposits" ALTER COLUMN "account_number" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "loans" ALTER COLUMN "account_number" DROP NOT NULL,
ALTER COLUMN "account_number" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "savings" ALTER COLUMN "account_number" SET DATA TYPE TEXT;
