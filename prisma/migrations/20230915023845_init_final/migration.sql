-- CreateTable
CREATE TABLE "reservations" (
    "id" TEXT NOT NULL,
    "branch_id" TEXT,
    "destination_service" INTEGER,
    "reason" TEXT,
    "attend_at_start" TIMESTAMP(3),
    "attend_at_end" TIMESTAMP(3),
    "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP,
    "is_active" INTEGER DEFAULT 1,
    "created_by_id" TEXT,

    CONSTRAINT "reservations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "saving_id" TEXT,
    "transaction_type" INTEGER,
    "status" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    "tenant_id" INTEGER,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "savings" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "currentBalance" INTEGER DEFAULT 0,
    "availableBalance" INTEGER,
    "last_synced_at" TIMESTAMP,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,
    "deleted_by" TEXT,
    "customer_id" TEXT,

    CONSTRAINT "savings_pkey" PRIMARY KEY ("id")
);

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
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT,
    "username" TEXT,
    "password" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP(3),
    "client_type" TEXT DEFAULT 'CORPORATE',
    "is_active" INTEGER DEFAULT 0,
    "tenant_id" INTEGER,
    "customer_id" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "identity_number" TEXT,
    "full_name" TEXT,
    "email" TEXT,
    "mother_maiden_name" TEXT,
    "referral_code" TEXT,
    "birth_place" TEXT,
    "birth_date" DATE,
    "last_synced_at" TIMESTAMP,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP,
    "created_by" TEXT,
    "updated_by" TEXT,
    "deleted_by" TEXT,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "file_name" TEXT,
    "is_on_carousel" BOOLEAN,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deposits" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "transactionId" TEXT,
    "customerId" TEXT,

    CONSTRAINT "deposits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loans" (
    "id" TEXT NOT NULL,
    "loan" INTEGER DEFAULT 0,
    "no_rek" TEXT,
    "customer_id" TEXT,
    "saving_id" TEXT,

    CONSTRAINT "loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "loan_transactions" (
    "id" TEXT NOT NULL,
    "principalPaid" INTEGER DEFAULT 0,
    "interestPaid" INTEGER DEFAULT 0,
    "penaltyPaid" INTEGER DEFAULT 0,
    "tenantsId" INTEGER,
    "createdBy" TEXT,
    "transactionId" TEXT,

    CONSTRAINT "loan_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "reservations" ADD CONSTRAINT "reservations_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_saving_id_fkey" FOREIGN KEY ("saving_id") REFERENCES "savings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "savings" ADD CONSTRAINT "savings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_deleted_by_fkey" FOREIGN KEY ("deleted_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_saving_id_fkey" FOREIGN KEY ("saving_id") REFERENCES "savings"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan_transactions" ADD CONSTRAINT "loan_transactions_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "transactions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan_transactions" ADD CONSTRAINT "loan_transactions_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "loan_transactions" ADD CONSTRAINT "loan_transactions_tenantsId_fkey" FOREIGN KEY ("tenantsId") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;
