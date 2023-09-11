-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "branch_id" TEXT,
    "destination_service" INTEGER,
    "reason" TEXT,
    "attend_at_start" TIMESTAMP(3),
    "attend_at_end" TIMESTAMP(3),
    "created_at" TIMESTAMP,
    "created_by" INTEGER,
    "deleted_at" TIMESTAMP,
    "is_active" BOOLEAN DEFAULT false,
    "tenant_id" INTEGER,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Savings" (
    "id" TEXT NOT NULL,
    "customer_id" TEXT,
    "external_id" TEXT,
    "current_balance" INTEGER,
    "available_balance" INTEGER,
    "status" INTEGER,
    "product_type" TEXT,
    "last_synced_at" TIMESTAMP NOT NULL,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "craated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP,

    CONSTRAINT "Savings_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "is_active" BOOLEAN,
    "email" TEXT,
    "email_confirmed_at" TIMESTAMP,
    "username" TEXT,
    "password" TEXT,
    "last_name" TEXT,
    "first_name" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "delete_at" TIMESTAMP(3),
    "account_officer_id" TEXT DEFAULT 'CORPORATE',
    "client_type" TEXT,
    "customer_id" TEXT,
    "tenant_id" INTEGER,
    "branch_id" TEXT,
    "tenantsId" INTEGER,
    "customersId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customers" (
    "id" TEXT NOT NULL,
    "external_id" TEXT,
    "full_name" TEXT,
    "identity_number" TEXT,
    "identity_type" TEXT,
    "email" TEXT,
    "phone_number" TEXT,
    "mobile_number" TEXT,
    "gender" TEXT,
    "address" TEXT,
    "subdistrict" TEXT,
    "district" TEXT,
    "mother_maiden_name" TEXT,
    "referral_code" TEXT,
    "dati2_code" TEXT,
    "identity_photo_url" TEXT,
    "selfie_photo_url" TEXT,
    "birth_place" TEXT,
    "birth_date" DATE,
    "status" INTEGER,
    "last_synced_at" TIMESTAMP,
    "created_by" INTEGER,
    "updated_by" INTEGER,
    "deleted_by" INTEGER,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "delete_at" TIMESTAMP,

    CONSTRAINT "Customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "filename" TEXT,
    "isOnCarousel" BOOLEAN,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Savings" ADD CONSTRAINT "Savings_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_tenantsId_fkey" FOREIGN KEY ("tenantsId") REFERENCES "tenants"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_customersId_fkey" FOREIGN KEY ("customersId") REFERENCES "Customers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
