-- AlterTable
ALTER TABLE "deposits" ALTER COLUMN "account_number" DROP NOT NULL,
ALTER COLUMN "balance" DROP NOT NULL;

-- AlterTable
ALTER TABLE "images" ADD COLUMN     "tenant_id" INTEGER;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
